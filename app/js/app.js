'use strict';


// Declare app level module which depends on filters, and services
angular.module('socialister', ['firebase', 'socialister.filters', 'socialister.services', 'socialister.directives', 'socialister.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/something', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/items', {templateUrl: 'partials/items.html', controller: 'ItemCtrl'});
    $routeProvider.when('/filter', {templateUrl: 'partials/filter.html', controller: 'FilterCtrl'});
    $routeProvider.otherwise({redirectTo: '/items'});
  }]);

// instatiate the FirebaseAuthClient and monitor the user's auth state
var chatRef = new Firebase('https://wfp.firebaseio.com');
var authClient = new FirebaseAuthClient(chatRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    //alert(error);
  } else if (user) {
    // user authenticated with Firebase
    alert('User ID: ' + user.id + ', Provider: ' + user.provider);
  } else {
    // user is logged out
  }
});
