(function() {
    
        "use strict";

	angular
		.module("dashboardModule")
		.controller("dashboard.dashboardViewController", 
                        Controller);
    
        Controller.$inject = [
                'dataHolder',
                '$localstorage'
        ];
    
        function Controller(
                dataHolder,
                $localstorage
                ) 
        {
        var vm = this;
        // brings the selected item from dataHolder
        vm.selected = dataHolder.selected;
        $localstorage.getObject('products', []);
        }   
})();