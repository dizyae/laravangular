(function() {
  'use strict';

  angular.module('auth')
    .factory('SessionService', SessionService);

  SessionService.$inject = ['store'];

  function SessionService(store) {
    return {
      create: createSession,
      get: getSession,
      destroy: destroySession
    };

    function createSession(userData) {
      store.set('session', userData);
    }

    function getSession() {
      return store.get('session');
    }

    function destroySession() {
      store.remove('session');
    }
  }
})();