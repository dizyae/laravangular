(function() {
  angular
    .module('layout')
    .run(run);

  run.$inject = ['routerHelper'];

  function run(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'home',
      config: {
        url: '/',
        templateUrl: 'app/layout/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        data: {
          authRequired: true
        }
      }
    }];
  }
})();
