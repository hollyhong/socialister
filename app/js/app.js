'use strict';


// Declare app level module which depends on filters, and services
angular.module('socialister', ['firebase', 'socialister.filters', 'socialister.services', 'socialister.directives', 'socialister.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/somthing', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/items', {templateUrl: 'partials/items.html', controller: 'ItemCtrl'});
    $routeProvider.otherwise({redirectTo: '/items'});
  }]);
