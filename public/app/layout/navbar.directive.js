// NOTE WELL: this is an EXAMPLE only. Do NOT include this in every Payscape project
// that inherits from appBase
(function() {
  'use strict';

  angular.module('layout')
    .directive('psaSimpleNavbar', simpleNavbarDirective);

  SimpleNavbarController.$inject = ['logger'];

  function simpleNavbarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'webapp/layout/navbar.html',
      scope: {
        importantDate: '='
      },
      controller: SimpleNavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };
  }

  function SimpleNavbarController(logger) {
    var vm = this;

    vm.isCollapsed = false;
    logger.info('On initialization, isCollapsed is', vm.isCollapsed);
  }
})();
