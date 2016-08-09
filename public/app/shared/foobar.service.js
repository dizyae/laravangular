// NOTE WELL: this is an EXAMPLE only. Do NOT include this in every Payscape project
// that inherits from appBase
(function() {
  'use strict';

  angular.module('shared')
    .factory('foobar', foobarService);

  foobarService.$inject = [];

  // This code is organized according to the Revealing Module Pattern
  function foobarService() {
    // First, show the service object, at the top of the code
    var service = {
      somePublicFunction: somePublicFunction
    };

    return service;

    // Public/Callable Members ////////////////////////////////////////////////////////////////////////////

    // Secondly, expose callable/public members at the top of the function
    function somePublicFunction() {
      return somePrivateFunction();
    }

    // //// Private/Non-Callable Members /////////////////////////////////////////////////////////////////////////

    // Finally, define non-callable/private members at the bottom
    function somePrivateFunction() {
      return 0;
    }
  }
})();
