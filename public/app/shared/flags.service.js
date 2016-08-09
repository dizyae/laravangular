// NOTE WELL: this is an EXAMPLE only. Do NOT include this in every Payscape project
// that inherits from appBase
(function() {
  'use strict';

  angular.module('shared')
    .factory('flags', flagsService);

  flagsService.$inject = ['$http', 'logger'];

  // This code is organized according to the Revealing Module Pattern
  function flagsService($http, logger) {
    // First, show the service object, at the top of the code
    var service = {
      getAmericanFlagUrl: getAmericanFlagUrl,
      getIndianFlagUrl: getIndianFlagUrl
    };

    return service;

    // //// Public/Callable Members ////////////////////////////////////////////////////////////////////////////

    // Secondly, expose callable/public members at the top of the function
    function getAmericanFlagUrl() {
      var flagFileName = 'File:Flag of the United States.svg';

      return getFlagUrl(flagFileName);
    }

    function getIndianFlagUrl() {
      var flagFileName = 'File:Flag of India.svg';

      return getFlagUrl(flagFileName);
    }

    // //// Private/Non-Callable Members /////////////////////////////////////////////////////////////////////////

    // Finally, define non-callable/private members at the bottom
    function getFlagUrl(flagFileName) {
      var apiUrl = 'https://commons.wikimedia.org/w/api.php';

      var config = {
        params: {
          action: 'query',
          format: 'json',
          prop: 'imageinfo',
          titles: flagFileName,
          iiprop: 'url',
          callback: 'JSON_CALLBACK'
        }
      };

      return $http.jsonp(apiUrl, config)
        .then(getFlagUrlComplete)
        .catch(getFlagUrlError);

      function getFlagUrlComplete(response) {
        var key = Object.keys(response.data.query.pages)[0];

        return response.data.query.pages[key].imageinfo[0].url;
      }

      function getFlagUrlError(error) {
        logger.error('XHR Failed for getFlagUrl. Response: ', error);
        // logger.error(error);
      }
    }
  }
})();
