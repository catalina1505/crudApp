(function () {

	'use strict';

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardMainController",
			Controller);
	
	Controller.$inject = [
			'$state',
			'dataHolder',
			'ngNotify',
			'httpMock'
						];
	function Controller(
			$state,
			dataHolder,
			ngNotify,
			httpMock
						) 
	{
		var vm = this;
		vm.selected = {};
		vm.selectProduct = selectProduct;
		vm.propertyName = 'price';
		vm.reverse = false;
		vm.prod = dataHolder.products;
		vm.currentPage = 0;
		vm.pageSize = 5;
		vm.viewProd = viewProd;
		vm.editProd = editProd;

		function init() {
		httpMock
			.getProducts()
			.then(function (products) {
				vm.prod = products;
		}, function () {
			ngNotify.set('The application doesn\'t work', 'error');
		});
		}
		init();

		// pagination
		vm.numberOfPages = function(){
			return Math.ceil(vm.prod.length/vm.pageSize);                
		}

		function selectProduct(product) {
			vm.selected = product;
		}

		vm.random = function() {
			vm.pageSize * vm.currentPage;
		}
		// delete a product
		vm.deleteProduct = function () {
			var index = vm.prod.findIndex(function (item) { return item.code == vm.selected.code })
			vm.prod.splice(index, 1);
			if(vm.random > vm.prod.length) {
				currentPage = 0;
			}

			function remove() {
				httpMock
					.setObj('products', vm.prod)
					.then(function () {
						ngNotify.set('The product was deleted!', 'success');
					}, function () {
					ngNotify.set('The product wasn\'t deleted!', 'error');
				});
				}
				remove();
		}

		// sorting products
		vm.sortBy = function(property) {
			vm.reverse = (vm.propertyName === property) ? !vm.reverse : false;
			vm.propertyName = property;	
		  }

		vm.getSortClass = function(property) {
			return (vm.reverse && vm.propertyName === property) ? 'arrow-down' : 'arrow-up';
		  }

		function editProd(product) {
			dataHolder.selected = product;
			$state.go('edit', {code: product.code});
		}

		function viewProd(product) {
			dataHolder.selected = product;
			$state.go('view', {code: product.code});
		}		
	}
})();