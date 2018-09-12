
(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardEditController", 
					Controller);
    
    Controller.$inject = [
            'dataHolder',
            'ngNotify',
            'httpMock',
            '$stateParams'];
    
    function Controller (
            dataHolder,
            ngNotify,
            httpMock,
            $stateParams)   
    {
        var vm = this;
        vm.editProduct = {};
        vm.selected = dataHolder.selected;
        vm.prod = dataHolder.products;
        vm.edit = edit;
        
        // find the selected product and update it
        function edit() {
            httpMock
            .getProducts()
            .then(function(response) {
                for (var i = 0; i < response.length ; i++){
                    if(response[i].code == $stateParams.code) {
                        vm.selected = response[i];
                    }
                }
            }, function () {
                ngNotify.set('You didn\'t select a product', 'error');
            });
        }        
        edit();

        vm.updateProduct = function() {
            var index = vm.prod.findIndex(function(item){ return item.code == vm.selected.code});
            vm.selected.dateNew = new Date();

                httpMock
                    .setObj('products', vm.prod)
                    .then(function () {
                    ngNotify.set('The product was edited!', 'success')	
                    }, function () {
                    ngNotify.set('The product couldn\'t be edited', 'error');
                });
            vm.prod[index] = vm.selected;   
        };
    } 
})();