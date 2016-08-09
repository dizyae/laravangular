(function() {
  'use strict';

  angular
    .module('core')
    .run(run);

  run.$inject = ['routerHelper'];

  function run(routerHelper) {
    var otherwise = '/404';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [{
      state: '404',
      config: {
        url: '/404',
        templateUrl: 'app/core/404.html',
        data: {
          authRequired: false
        }
      }
    }];
  }
})();
