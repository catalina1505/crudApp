(function () {

    'use strict';

    angular
        .module('appModule')
        .controller('AppController',
            Controller);

    Controller.$inject = [
        '$scope',
        '$state'
    ];

    function Controller($scope,
        $state) {
        var vm = this;

    }
})();