(function() {
    
	'use strict';
    
	angular
		.module("welcomeModule")
		.controller("welcome.welcomeController", 
					Controller);
    
    Controller.$inject = ['$localstorage',
                        '$state',
                        'ngNotify'
    ];
    
     function Controller($localstorage,
                        $state,
                        ngNotify
                         )
    { 
        var vm = this;
        vm.check = check;

        // save email and password
        vm.storedName = $localstorage.set('userName', 'catalina@gmail.com');
        vm.userPw = $localstorage.set('userPw', 'password');

        //check if email and pasword are correct
        function check() {
    
            vm.storedName = $localstorage.get('userName');
            vm.storedPw = $localstorage.get('userPw');
        
            vm.userName = document.getElementById('userName');
            vm.userPw = document.getElementById('userPw');

            if(vm.userName.value == vm.storedName && vm.userPw.value == vm.storedPw) {
                $state.go('dashboard');
            } else {
                ngNotify.set('Wrong email or password!', 'error');
            }
        }
    } 
})();