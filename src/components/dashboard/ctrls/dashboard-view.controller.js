(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'dataHolder',
                '$state',
                'httpMock',
                '$stateParams'
                                ];
    
        function Controller(
                dataHolder,
                $state,
                httpMock,
                $stateParams             
                        ) 
        {
        var vm = this;
        vm.selected = dataHolder.selected;
        vm.view = view;

        function view() {
                    httpMock
                    .get($stateParams.id)
                    .then(function(response) {
                        vm.product = response;
                    }, function () {
                        ngNotify.set('You didn\'t selected a product', 'error');
                    });
             }
            view();

        vm.date = new Date();
        }   
})()