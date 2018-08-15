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
    
    function Controller(
            dataHolder,
            $localstorage
        ) 
    
{
       var vm = this;
       vm.message = "";
       vm.editProduct = {};
       vm.selected = dataHolder.selected;
       vm.prod = dataHolder.products;

       vm.updateProduct = function() {
        var index = vm.prod.findIndex(function(elem){ return elem.code == vm.selected.code})
        vm.prod(index) = vm.selected;
        $timeout(function() {
            return $localstorage.setObject('products', dataHolder.products);
        }, 2000);
        };

} 
})();