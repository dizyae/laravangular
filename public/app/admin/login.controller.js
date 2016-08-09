(function() {
  'use strict';

  angular.module('admin')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['AuthService', '$http', '$state'];

  function LoginController(AuthService, $http, $state) {
    var vm = this;

    vm.login = function() {
      var loginData = {
        email: vm.email,
        password: vm.password
      }
      AuthService.login(loginData)
        .then(function(response) {
          $state.go('home');
        })
        .catch(function(error) {
          vm.error = error;
        });
    }
  }
})();