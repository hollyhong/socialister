'use strict';


// Declare app level module which depends on filters, and services
angular.module('socialister', ['firebase', 'socialister.filters', 'socialister.services', 'socialister.directives', 'socialister.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/categories', {templateUrl: 'partials/categories.html', controller: 'MainCtrl'});
    $routeProvider.when('/items', {templateUrl: 'partials/items.html', controller: 'MainCtrl'});
    $routeProvider.when('/filter', {templateUrl: 'partials/filter.html', controller: 'MainCtrl'});
    $routeProvider.when('/feed', {templateUrl: 'partials/feed.html', controller: 'MainCtrl'});
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'MainCtrl'});
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'MainCtrl'});
    $routeProvider.when('/send', {templateUrl: 'partials/send.html', controller: 'MainCtrl'});
    $routeProvider.when('/suggest', {templateUrl: 'partials/suggest.html', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/items'});
  }]);
