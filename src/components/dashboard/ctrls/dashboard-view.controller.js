(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'dataHolder',
                '$httpMock'
                                ];
    
        function Controller(
                dataHolder,
                $httpMock              
                        ) 
        {
        var vm = this;
        
        // brings the selected item from dataHolder
        vm.selected = dataHolder.selected;
        vm.date = new Date();
        }   
})()