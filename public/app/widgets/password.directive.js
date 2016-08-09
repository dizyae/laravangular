(function() {
  'use strict';

  angular
    .module('widgets')
    .directive('validatePassword', validatePassword);

  function validatePassword() {
    //  requires lowercase, uppercase, numeric and special character in password
    var PASSWORD_REGEXP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/;

    return {
      require: 'ngModel',
      restrict: '',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.validatePassword = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || PASSWORD_REGEXP.test(modelValue);
        };
      }
    };
  }
})();
