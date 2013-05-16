'use strict';

/* Controllers */

angular.module('socialister.controllers', []).
  controller('MyCtrl1', [function() {
    return;
  }])
  .controller('ItemCtrl', ['$scope', 'angularFire',
    function ItemCtrl($scope, angularFire) {
      var url = 'https://wfp.firebaseio.com/items';
      var promiseItems = angularFire(url, $scope, 'items', []);

      $scope.addItem = function () {
        if (!$scope.newItem.length) {
          return;
        }

        var itemRef = $scope.items.push({
          text: $scope.newItem,
          tags: $scope.newTags
        });

        $scope.newTags.forEach(function(tag) {
          var tagRef  = new Firebase('https://wfp.firebaseio.com/tags');
          tagRef.child(tag).child($scope.newItem).set(itemRef.toString());
        });

        $scope.newItem = '';
        $scope.newTags = '';
      };

      $scope.rmItem = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
      };

    }
  ])
  .controller('FilterCtrl', ['$scope', 'angularFire',
    function FilterCtrl($scope, angularFire) {
      var url = 'https://wfp.firebaseio.com/items';
      var promise = angularFire(url, $scope, 'items', []);
      promise.then(function() {
        var items = $scope.items,
          tags = {},
          i,
          t,
          tag,
          item;
        for (i = items.length - 1; i >= 0; i--) {
          item = items[i].text;
          for (t = items[i]['tags'].length - 1; t >= 0; t--) {
            tag = items[i]['tags'][t];
            console.log(item + ':' + tag);
            if (tags.hasOwnProperty(tag)) {
              tags[tag].push(item);
            }
            else {
              tags[tag] = [item];
              console.log(tags);
            }
          }
        }
        $scope.items = items;
        $scope.tags = tags;
      });
    }
  ])
;
