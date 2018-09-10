(function() {
    
	'use strict';
    
	angular
		.module("welcomeModule")
		.controller("welcome.welcomeController", 
					Controller);
    
    Controller.$inject = ['$localstorage',
                        '$state'
    ];
    
     function Controller($localstorage,
                        $state
                         )
    { 
        var vm = this;
        // Name and Password from the register-form
        vm.name1 = document.getElementById('name1');
        vm.pw = document.getElementById('pw');
        
        // storing input from register-form
        function store() {
            $localstorage.set('name1', name1.value);
            $localstorage.set('pw', pw.value);
        }
        store();
        
        // check if stored data from register-form is equal to entered data in the   login-form
        function check() {
        
            // stored data from the register-form
            vm.storedName = $localstorage.get('name1');
            vm.storedPw = $localstorage.get('pw');
        
            // entered data from the login-form
            vm.userName = document.getElementById('userName');
            vm.userPw = document.getElementById('userPw');

            if(vm.userName.value == vm.storedName && vm.userPw.value == vm.storedPw) {
                //$state.go('dashboard');
                console.log('right');
            }else {
                alert('ERROR.');
            }
        }
        check()
    } 
})();