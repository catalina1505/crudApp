(function() {
    
	"use strict";
    
	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardCreateController", 
					Controller);
    
    Controller.$inject = [
			'dataHolder',
			'ngNotify',
			'httpMock'];
    
    function Controller(
			dataHolder,
			ngNotify,
			httpMock
						) 
	{
		var vm = this;
		vm.newProduct = {};
		vm.create = create;
				
		// create and push a new product into dataHolder
        vm.saveProduct = function(){
		   dataHolder.products.push(vm.newProduct);
		   vm.newProduct.code = Date.now() + 1;
		//    (Date.now() + Math.random().toString(16).slice(2,5)).slice(7);
		   vm.newProduct.date = new Date();

		   function create() {
			httpMock
				.setObj('products', dataHolder.products)
				.then(function () {
				ngNotify.set('You added a new product!', 'success')	
			}, function () {
				ngNotify.set('The product wasn\'t added to the list', 'error');
			});
			}
			create();

			vm.newProduct = {};
		};	
	}
})();
