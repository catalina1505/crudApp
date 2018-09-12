(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'httpMock',
                '$stateParams'];
    
        function Controller(              
                httpMock,
                $stateParams) 
        {
        var vm = this;
        vm.view = view;

        function view(product) {
            httpMock
            .getProducts()
            .then(function(response) {
                for (var i = 0; i < response.length ; i++){
                    if(response[i].code == $stateParams.code) {
                        vm.selected = response[i];
                    }
                }
            }, function () {
                ngNotify.set('You didn\'t select a product', 'error');
            });
        }        
        view();

        vm.date = new Date();
        }   
})()