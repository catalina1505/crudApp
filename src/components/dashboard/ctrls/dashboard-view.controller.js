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
                vm.selected = null;
                for (var i = 0; i < response.length ; i++){
                   // if(response[i].code === vm.selected) {
                   //     return response[i];
                   // }
                    vm.selected = response[i];
                    
                console.log(i);
                }
            }, function () {
                ngNotify.set('You didn\'t select a product', 'error');
            });
        }
            view();

        vm.date = new Date();
        }   
})()