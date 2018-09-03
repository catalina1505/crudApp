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
			'ngNotify',
			'$httpMock'
        	];
    
    function Controller(
			$timeout,
			dataHolder,
			$localstorage,
			ngNotify,
			$httpMock
						) 
	{
		var vm = this;
		vm.newProduct = {};	
				
		// create and push a new product into dataHolder
        vm.saveProduct = function(){
		   dataHolder.products.push(vm.newProduct);
		   
		   vm.newProduct.code = (Date.now() + Math.random().toString(16).slice(2,5)).slice(7);
		   vm.newProduct.date = new Date();

		   ngNotify.set('You added a new product!', 'success')

		   $timeout(function() {
				$localstorage.setObject('products', dataHolder.products);
			}, 500);

			vm.newProduct = {};

		};	
	}
})();
