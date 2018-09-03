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
		vm.reverse = false;
		vm.prod = dataHolder.products;
		vm.currentPage = 0;
		vm.pageSize = 10;

		function init() {
			$timeout(function() {
			return vm.prod = $localstorage.getObject('products');
		   }, 500);
		}
		init();

		// pagination
		vm.numberOfPages=function(){
			return Math.ceil(vm.prod.length/vm.pageSize);                
		}

		function selectProduct(product) {
			vm.selected = product;
		}

		// delete a product from dataHolder
		vm.deleteProduct = function () {
			var index = vm.prod.findIndex(function (elem) { return elem.code == vm.selected.code })
			vm.prod.splice(index, 1);

			ngNotify.set('The product was deleted!', 'success');
			
			// $timeout(function () {
			// 	$localstorage.setObject('products', dataHolder.products);
			// }, 500);
		}

		// sorting products
		vm.sortBy = function(property) {
			vm.reverse = (vm.propertyName === property) ? !vm.reverse : false;
			vm.propertyName = property;
			
		  }

		vm.getSortClass = function(property) {
			return (vm.reverse && vm.propertyName === property) ? 'arrow-down' : 'arrow-up';
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