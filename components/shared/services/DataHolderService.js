(function () {

    'use strict';

    angular
        .module('appModule')
        .service('dataHolder' , function(){
            this.products = [];
            this.selected = {};
            }
        )
})();