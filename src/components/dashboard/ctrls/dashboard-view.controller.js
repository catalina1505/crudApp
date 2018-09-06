(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'dataHolder',
                '$localstorage',
                '$state',
                'httpMock',
                '$stateParams'
                
                                ];
    
        function Controller(
                dataHolder,
                $localstorage,
                $state,
                httpMock,
                $stateParams             
                        ) 
        {
        var vm = this;
        vm.view = view;

        function view() {
            httpMock
            .getProducts()
            .then(function(response) {
                var product = $localstorage.getObject('product');
                var index = product.findIndex(function (item) { return item.code === product.code })
                vm.selected = response[index];

            }, function () {
                ngNotify.set('You didn\'t select a product', 'error');
            });
        }
            view();

        vm.date = new Date();
        }   
})()