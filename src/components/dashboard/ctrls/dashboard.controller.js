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
		vm.submit = submit;
		vm.pagedItems = [];
		vm.filteredItems = {};
		vm.itemsPerPage = 5;
		vm.groupedItems = [];

		function submit() {
			$state.go('welcome');
		}

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
		// vm.numberOfPages = function(){
		// 	return Math.ceil(vm.prod.length /vm.pageSize);                
		// }

// calculate page in place
    vm.groupToPages = function () {
        vm.pagedItems = [];
        
        for (var i = 0; i < vm.filteredItems.length; i++) {
            if (i % vm.itemsPerPage === 0) {
                vm.pagedItems[Math.floor(i / vm.itemsPerPage)] = [ vm.filteredItems[i] ];
            } else {
                vm.pagedItems[Math.floor(i / vm.itemsPerPage)].push(vm.filteredItems[i]);
            }
        }
    };
    
    vm.range = function (start, end) {
        var ret = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i++) {
            ret.push(i);
        }
        return ret;
    };
    
    vm.prevPage = function () {
        if (vm.currentPage > 0) {
            vm.currentPage--;
        }
    };
    
    vm.nextPage = function () {
        if (vm.currentPage <vm.pagedItems.length - 1) {
            vm.currentPage++;
        }
    };
    
    vm.setPage = function () {
        vm.currentPage = this.n;
    };




		function selectProduct(product) {
			vm.selected = product;
		}

		// delete a product
		vm.deleteProduct = function () {
			var index = vm.prod.findIndex(function (item) { return item.code == vm.selected.code })
			vm.prod.splice(index, 1);

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