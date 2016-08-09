(function() {
  'use strict';

  angular.module('core')
    .config(configure);

  configure.$inject = ['$logProvider'];

  function configure($logProvider) {
    $logProvider.debugEnabled = true;
  }
})();
