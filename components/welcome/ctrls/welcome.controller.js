(function() {
    
	'use strict';
    
	angular
		.module("welcomeModule")
		.controller("welcome.welcomeController", 
					Controller);
    
    Controller.$inject = [
        '$scope',
        '$rootScope',
        '$state'
    ];
    
     function Controller($scope, 
                         $state) {
        var vm = this;       
 
    }
   
})();