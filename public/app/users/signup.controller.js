(function() {
  'use strict';

  angular
    .module('users')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['AuthenticationService', 'UserService', 'logger', '$state'];

  function SignupController(AuthenticationService, UserService, logger, $state) {
    var vm = this;
    vm.submitForm = submitForm;

    function submitForm() {
      hasAccount();
      createUser();
      login();
    }

    function hasAccount() {
      return UserService.getByEmail(vm.user.email)
        .then(successHandler())
        .catch(validateEmailFailed());
    }

    function createUser() {
      return UserService.create(vm.user)
        .then(successHandler())
        .catch(createUserFailed());
    }

    function login() {
      AuthenticationService.clearCredentials();
      AuthenticationService.setCredentials(vm.user.email, vm.user.password);
      $state.go('home');
    }

    function successHandler() {
      return true;
    }

    function validateEmailFailed(error) {
      logger.error(error);
    }

    function createUserFailed(error) {
      logger.error(error);
      vm.dataLoading = false;
    }
  }
})();
