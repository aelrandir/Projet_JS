const $ = require('jquery');
const angular = require('angular');
window.moment = require('moment');
window.calendar = require('fullcalendar');
require('angular-ui-bootstrap');
require('angular-ui-calendar');

// $.get('/api/links').then(function(links) {
//   console.log(links);
// });

/**
 * calendarDemoApp - 0.9.0
 */
angular.module('ListeAnime', ['ui.calendar', 'ui.bootstrap']);

angular
  .module('ListeAnime')
  .controller('CalendarCtrl', ['$scope', function($scope) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();


    /* event source that contains custom events on the scope */
    $scope.events = [{
      title: 'All Day Event',
      start: new Date(y, m, 1)
    }, {
      title: 'Long Event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2)
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d - 3, 16, 0),
      allDay: false
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d + 4, 16, 0),
      allDay: false
    }, {
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false
    }, {
      title: 'Click for Google',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/'
    }];

    $scope.eventSources = [$scope.events];
  }]);
