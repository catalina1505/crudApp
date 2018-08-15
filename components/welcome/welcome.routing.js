(function() {
	
    'use strict';
    
    angular
        .module('welcomeModule')
        .config(Config);
    
    Config.$inject = [
        '$stateProvider'
		
        ];
    
    function Config($stateProvider) {
        
        $stateProvider
            .state('welcome', {
				parent: 'main', 
                url: '',
                views: {
                    'content@': {
                        templateUrl: 'components/welcome/views/welcome.html',
                        controller: 'welcome.welcomeController as welcomeCtrl'
                    }
                }
        });
    }
})();