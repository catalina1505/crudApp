(function () {
    'use strict';
    
    angular
        .module('appModule')
        .config(Config);
    
    Config.$inject = [
        '$stateProvider'
    ];
    
    function Config($stateProvider) {
        $stateProvider
            .state('main', {
                abstract: true 
            });
        }
    })();