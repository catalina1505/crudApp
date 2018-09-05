(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'dataHolder',
                'httpMock',
                '$stateParams'
                                ];
    
        function Controller(
                dataHolder,
                httpMock,
                $stateParams             
                        ) 
        {
        var vm = this;
        
        function view() {
                // if (!dataHolder.selected) {
                    httpMock
                    .get($stateParams.id)
                    .then(function(response) {
                        vm.product = response;
                    }, function () {
                        ngNotify.set('You didn\'t selected a product', 'error');
                    });
                }
            // }
            view();

        // brings the selected item from dataHolder
        vm.selected = dataHolder.selected;
        vm.date = new Date();
        }   
})()