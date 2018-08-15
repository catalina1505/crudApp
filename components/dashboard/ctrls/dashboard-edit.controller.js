(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardEditController", 
					Controller);
    
    Controller.$inject = [
        'dataHolder',
        '$localstorage'
        ];
    
    function Controller (
            dataHolder,
            $localstorage)   
    {
        var vm = this;
        vm.editProduct = {};
        vm.selected = dataHolder.selected;
        vm.prod = dataHolder.products;

        // find the selected product in dataHolder and update it
        vm.updateProduct = function() {
        var index = vm.prod.findIndex(function(elem){ return elem.code == vm.selected.code})
        vm.prod(index) = vm.selected;
        $timeout(function() {
            return $localstorage.setObject('products', dataHolder.products);
        }, 2000);
    };
} 
})();