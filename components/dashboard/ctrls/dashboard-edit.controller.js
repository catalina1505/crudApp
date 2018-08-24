(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardEditController", 
					Controller);
    
    Controller.$inject = [
            'dataHolder',
            '$localstorage',
            'ngNotify'
        ];
    
    function Controller (
            dataHolder,
            $localstorage,
            ngNotify
        )   
    {
        var vm = this;
        vm.editProduct = {};
        vm.selected = dataHolder.selected;
        vm.prod = dataHolder.products;

        function init() {
            $timeout(function() {
            return vm.selected = $localstorage.getObject('products');
           }, 500);
        }
        init();


        // find the selected product in dataHolder and update it
        vm.updateProduct = function() {

            var index = vm.prod.findIndex(function(elem){ return elem.code == vm.selected.code})

            vm.selected.dateNew = new Date();

            ngNotify.set('Edited product was saved!', 'success')

            vm.prod(index) = vm.selected;
            

        };
    } 
})();