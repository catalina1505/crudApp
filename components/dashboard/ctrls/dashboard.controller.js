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
		'$localstorage'
	];

	function Controller(
		$state,
		$timeout,
		dataHolder,
		$localstorage
	) 
	{
		var vm = this;
		vm.prod = dataHolder.products;
		vm.selected = {};
		vm.selectProduct = selectProduct;
		
		function selectProduct(product) {
			vm.selected = product;
		}

		// finds the selected product in dataHolder using the code and deletes it with splice
		vm.deleteProduct = function () {
			var index = vm.prod.findIndex(function (elem) { return elem.code == vm.selected.code })
			vm.prod.splice(index, 1);
			$timeout(function () {
				$localstorage.setObject('products', dataHolder.products);
			}, 2000);
		}

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