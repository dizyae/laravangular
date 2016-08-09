(function() {
  'use strict';

  angular
    .module('users')
    .run(run);

  run.$inject = ['routerHelper'];

  function run(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'signup',
      config: {
        url: '/signup',
        templateUrl: 'app/users/signup.html',
        controller: 'SignupController',
        controllerAs: 'signup'
      }
    }];
  }
})();
