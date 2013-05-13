'use strict';

/* Controllers */

angular.module('socialister.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('ItemCtrl', ['$scope', 'angularFire',
    function MyCtrl($scope, angularFire) {
      var url = 'https://wfp.firebaseio.com/items';
      var promise = angularFire(url, $scope, 'items', []);

    }
  ]);
