(function() {
  'use strict';

  angular.module('auth')
    .run(run);

  run.$inject = ['$rootScope', '$state', 'AuthService'];

  function run($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      if (toState.data.authRequired && !AuthService.isAuthenticated()) {
        e.preventDefault();
        $state.go('login');
      }
    });
  }
})();