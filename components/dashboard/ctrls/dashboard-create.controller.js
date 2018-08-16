(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardCreateController", 
					Controller);
    
    Controller.$inject = [
		'$timeout',
		'dataHolder',
		'$localstorage'
        ];
    
    function Controller(
			$timeout,
			dataHolder,
			$localstorage
						) 
	{
        var vm = this;
		vm.newProduct = {};	
		
		// generate an unique code: date in milliseconds + random number
		vm.newProduct.code = Date.now() + Math.random().toString(16).slice(2,5);
		
		// create a new product and push it into the products list from dataHolder service
        vm.saveProduct = function(){
		   dataHolder.products.push(vm.newProduct);
		   $timeout(function() {
				return $localstorage.setObject('products', dataHolder.products);
			}, 2000);
			vm.newProduct = {};
		};	
	}
})();
