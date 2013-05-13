'use strict';

/* Controllers */

angular.module('socialister.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('ItemCtrl', ['$scope', 'angularFire',
    function MyCtrl($scope, angularFire) {
      var url = 'https://wfp.firebaseio.com/items';
      var promise = angularFire(url, $scope, 'items', []);

      $scope.addItem = function () {
        if (!$scope.newItem.length) {
          return;
        }
        $scope.items.push({
          text: $scope.newItem
        });
        $scope.newItem = '';
      };

      $scope.rmItem = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
      };

    }
  ]);
