(function () {

	'use strict';

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardMainController",
			Controller);
	
	Controller.$inject = [
		'$state',
		'$timeout',
		'dataHolder',
		'$localstorage',
		'ngNotify'

	];

	function Controller(
			$state,
			$timeout,
			dataHolder,
			$localstorage,
			ngNotify

						) 
	{
		var vm = this;
		vm.selected = {};
		vm.selectProduct = selectProduct;
		vm.propertyName = 'price';
		vm.reverse = true;
		vm.prod = dataHolder.products;
	
		function selectProduct(product) {
			vm.selected = product;
		}

		// delete a product from dataHolder
		vm.deleteProduct = function () {
			var index = vm.prod.findIndex(function (elem) { return elem.code == vm.selected.code })
			vm.prod.splice(index, 1);
			ngNotify.set('The product was deleted!', 'success');
			$timeout(function () {
				$localstorage.setObject('products', dataHolder.products);
			}, 2000);
		}

		// still working on sorting
		vm.sortBy = function(propertyName) {
			vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
			vm.propertyName = propertyName;
	  	};

		vm.editProd = function (product) {
			dataHolder.selected = product;
			$state.go('edit');
		}

		vm.viewProd = function (product) {
			dataHolder.selected = product;
			$state.go('view');
		}		
	}
})();