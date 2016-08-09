(function() {
  'use strict';

  angular
    .module('users')
    .factory('UserService', UserService);

  UserService.$inject = ['$http', '$q', 'logger', 'API_URL'];

  function UserService($http, $q, logger, API_URL) {
    var service = {
      create: create,
      getByEmail: getByEmail
    };

    return service;

    function getByEmail(email) {
      return $http.get(API_URL + '/users/user-exists-by-email/' + email)
        .then(handleSuccess)
        .catch(handleError);
    }

    function create(user) {
      return $http.post(API_URL + '/users/user', user)
        .then(handleSuccess)
        .catch(handleError);
    }

    // private functions

    function handleSuccess(data, status, headers, config) { // eslint-disable-line no-unused-vars
      return data;
    }

    function handleError(error) {
      logger.error('XHR Error: ', error);
      return $q.reject(error);
    }
  }
})();
