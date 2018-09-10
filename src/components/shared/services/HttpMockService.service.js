(function () {

    'use strict';

    angular
        .module('appModule')
        .factory('httpMock', Factory);
        
    Factory.$inject = ['$timeout',
                       '$localstorage'
                        ];

    function Factory($timeout, $localstorage) {
        return {
            setObj: function(key, value) {
                return $timeout( function() {
                $localstorage.setObject(key, value);
                }, 1000)},

            getProducts: function() {
                return $timeout(function() {
                return $localstorage.getObject('products', []);
            }, 1000)},

            set: function(key, value) {
                return $timeout( function() {
                $localstorage.set(key, value);
                }, 1000)},

            get: function(key, defaultValue) {
                return $timeout( function() {
                $localstorage.get(key, defaultValue);
                }, 1000)},

            delete: function(key){
                return $timeout(function() {
                $localStorage.removeItem(key);
            }, 1000)}  
          }
        }
    })();
