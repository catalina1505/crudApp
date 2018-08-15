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

        vm.saveProduct = function(){
		   dataHolder.products.push(vm.newProduct);
		   $timeout(function() {
				return $localstorage.setObject('products', dataHolder.products);
			}, 2000);
			vm.newProduct = {};
		};

		
	}
})();
