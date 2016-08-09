// NOTE WELL: this is an EXAMPLE only. Do NOT include this in every Payscape project
// that inherits from appBase
(function() {
  'use strict';

  angular.module('layout')
      .controller('HomeController', HomeController);

  HomeController.$inject = ['flags', '$http', '$state', 'AuthService'];

  function HomeController(flags, $http, $state, AuthService) {
    var vm = this;

    vm.login = function() {
      $state.go('login');
    }
    vm.logout = function() {
      AuthService.logout(function() {
        $state.go('login');
      });
    }
    vm.flagsUrls = {};
    vm.height = '50px';
    vm.example = {
      title: 'AppBase',
      message: 'AppBase is awesome'
    };

    activate();

    // Resolving Promises
    // Resolve start-up logic for a controller in an activate function.
    // cf. https://github.com/johnpapa/angular-styleguide/tree/master/a1#controller-activation-promises

    function activate() {
      flags.getAmericanFlagUrl()
        .then(function(url) {
          vm.flagsUrls.american = url;
          return vm.flagsUrls.american;
        });

      flags.getIndianFlagUrl()
        .then(function(url) {
          vm.flagsUrls.indian = url;
          return vm.flagsUrls.indian;
        });
    }

    $http.get('http://localhost/api/rooms')
    .then(function(response) {
      console.log(response);
    });
  }
})();
