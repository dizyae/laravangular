(function() {
  'use strict';

  angular.module('auth')
  .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', 'SessionService', 'API_URL', '$q', 'logger'];

  function AuthService($http, SessionService, API_URL, $q, logger) {
    var service = {
      login: login,
      logout: logout,
      isAuthenticated: isAuthenticated,
    };

    return service;

    function login(loginData) {
      var url = API_URL + '/users/login';
      return $http.post(url, loginData)
        .then(function(response) {
          SessionService.create(response.data[0]);
          return SessionService.get();
        })
        .catch(handleError);
    }

    function logout(redirectTo) {
      SessionService.destroy();
      redirectTo();
    }

    function isAuthenticated() {
      return SessionService.get() !== null;
    }

    // Private //
    function handleError(error) {
      logger.error('XHR Failed for login:', error);
      return $q.reject(error.data.message);
    }
  }
})();