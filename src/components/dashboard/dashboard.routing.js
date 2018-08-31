(function() {
	
    'use strict';
    
    angular
        .module('dashboardModule')
        .config(Config);
    
    Config.$inject = [
        '$stateProvider'		
                    ];
    
    function Config($stateProvider) {
        // routing for dashboard, dashboard create/view/edit
        $stateProvider
            .state('dashboard', {
                parent: 'main',
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'components/dashboard/views/dashboard.html',
                        controller: 'dashboard.dashboardMainController as dashboardCtrl'
                    }
                }
        })
        
            .state('create', {
                parent: 'main',
                url: '/create',
                views: {
                    'content@': {
                        templateUrl: 'components/dashboard/views/dashboard-create.html',
                        controller: 'dashboard.dashboardCreateController as createCtrl'
                    }
                }
            })
            
            .state('edit', {
                parent: 'main',
                url: '/edit',
                views: {
                    'content@': {
                        templateUrl: 'components/dashboard/views/dashboard-edit.html',
                        controller: 'dashboard.dashboardEditController as editCtrl'
                    }
                }
            })
            
            .state('view', {
                parent: 'main',
                url: '/view',
                views: {
                    'content@': {
                        templateUrl: 'components/dashboard/views/dashboard-view.html',
                        controller: 'dashboard.dashboardViewController as viewCtrl'
                    }
                }
            })
    }
})();