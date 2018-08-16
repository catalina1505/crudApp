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
		vm.selected = {};
		vm.selectProduct = selectProduct;
		vm.propertyName = 'price';
		vm.reverse = true;
		vm.prod = dataHolder.products;

		// still working on sorting
		vm.sortBy = function(propertyName) {
		  vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
		  vm.propertyName = propertyName;
		};

		//working on save as pdf
		vm.pdfMaker = function(){
			var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
			pdfMake.createPdf(docDefinition).download('Dashboard.pdf');
		}

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