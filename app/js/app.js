'use strict';


// Declare app level module which depends on filters, and services
angular.module('socialister', ['firebase', 'socialister.filters', 'socialister.services', 'socialister.directives', 'socialister.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/items', {templateUrl: 'partials/items.html', controller: 'MainCtrl'});
    $routeProvider.when('/filter', {templateUrl: 'partials/filter.html', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/items'});
  }]);
