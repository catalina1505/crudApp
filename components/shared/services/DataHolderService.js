(function () {

    'use strict';

    angular
        .module('appModule')
        .service('dataHolder' , function(){
            // keeping all the products in an array
            this.products = [];
            // keeping a selected product
            this.selected = {};
            }
        )
})();