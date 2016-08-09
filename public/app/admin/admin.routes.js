(function() {
  angular
    .module('admin')
    .run(run);

  run.$inject = ['routerHelper'];

  function run(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'login',
      config: {
        url: '/login',
        templateUrl: 'app/admin/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
        data: {
          authRequired: false
        }
      }
    }];
  }
})();