(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'dataHolder'
                                ];
    
        function Controller(
                dataHolder                
                        ) 
        {
        var vm = this;
        
        
        // brings the selected item from dataHolder
        vm.selected = dataHolder.selected;
        vm.date = new Date();

        
        }   
})();