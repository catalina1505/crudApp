(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardCreateController", 
					Controller);
    
    Controller.$inject = [
		'$timeout',
		'dataHolder',
		'$localstorage',
		'ngNotify'
        ];
    
    function Controller(
			$timeout,
			dataHolder,
			$localstorage,
			ngNotify
						) 
	{
		var vm = this;
		vm.date = date;
		vm.newProduct = {};	
				
		// create and push a new product into dataHolder
        vm.saveProduct = function(){
		   dataHolder.products.push(vm.newProduct);
		   vm.date = new Date();
		   	// generate an unique code: date in milliseconds + random number
		   vm.newProduct.code = Date.now() + Math.random().toString(16).slice(2,5);
		   ngNotify.set('You added a new product!', 'success')
		   $timeout(function() {
				return $localstorage.setObject('products', dataHolder.products);
			}, 2000);
			vm.newProduct = {};
		};	
	}
})();
