// NOTE WELL: this is an EXAMPLE only. Do NOT include this in every Payscape project
// that inherits from appBase
(function() {
  'use strict';

  angular.module('widgets')
    .directive('psaCalendar', calendarDirective);

  CalendarController.$inject = [];

  function calendarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'webapp/widgets/calendar.directive.html',
      controller: CalendarController,
      controllerAs: 'calendar',
      bindToController: true
    };
  }

  function CalendarController() {
    // var vm = this;
  }
})();
