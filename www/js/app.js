'use strict';

/* App Module */

angular.module('my-app', ['PhoneGapReadyService']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/init', {templateUrl: 'views/init.html',   controller: PhoneGapCtrl}).
      otherwise({redirectTo: '/init'});
}]);
