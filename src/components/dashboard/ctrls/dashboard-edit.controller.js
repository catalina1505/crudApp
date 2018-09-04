
(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardEditController", 
					Controller);
    
    Controller.$inject = [
            'dataHolder',
            'ngNotify',
            'httpMock'
        ];
    
    function Controller (
            dataHolder,
            ngNotify,
            httpMock
        )   
    {
        var vm = this;
        vm.editProduct = {};
        vm.selected = dataHolder.selected;
        vm.prod = dataHolder.products;
        
        // find the selected product and update it
        vm.updateProduct = function() {
            var index = vm.prod.findIndex(function(item){ return item.code == vm.selected.code});

            vm.selected.dateNew = new Date();

            function saveEdit() {
                httpMock
                    .setObj('products', vm.prod)
                    .then(function () {
                    ngNotify.set('The product was edited!', 'success')	
                    }, function () {
                    ngNotify.set('You didn\'t selected a product', 'error');
                });
                }
            saveEdit();
            
            vm.prod[index] = vm.selected;   
        };
    } 
})();