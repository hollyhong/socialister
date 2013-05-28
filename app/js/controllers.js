'use strict';

/* Controllers */

angular.module('socialister.controllers', [])

  .controller('MainCtrl', ['$scope', 'angularFire',
    function MainCtrl($scope, angularFire) {
      var chatRef = new Firebase('https://wfp.firebaseio.com');
      var authClient = new FirebaseAuthClient(chatRef, function(error, user) {
        if (error) {
          console.log(error);
        } else if (user) {
        } else {
        }
        $scope.user = user;
      });

      $scope.login = function (provider) {
        authClient.login(provider);
      };

      $scope.logout = function () {
        authClient.logout();
      };

      var url = 'https://wfp.firebaseio.com/items';
      var promise = angularFire(url, $scope, 'items', []);

      $scope.addItem = function () {
        if (!$scope.newItem.length) {
          return;
        }
        var itemRef = $scope.items.push({
          text: $scope.newItem,
          tags: $scope.newTags
        });
        if ($scope.newTags && $scope.newTags.length) {
          $scope.newTags.forEach(function(tag) {
            var tagRef  = new Firebase('https://wfp.firebaseio.com/tags');
            tagRef.child(tag).child($scope.newItem).set(itemRef.toString());
          });
        }
        $scope.newItem = '';
        $scope.newTags = '';
      };

      $scope.rmItem = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
      };

      promise.then(function() {
        var tags = {},
          i,
          t,
          tag,
          item;
        for (i = $scope.items.length - 1; i >= 0; i--) {
          item = $scope.items[i].text;
          if (!$scope.items[i]['tags']) {
            if (tags.hasOwnProperty('Untagged')) {
              tags['Untagged'].push(item);
            }
            else {
              tags['Untagged'] = [item];
            }
          }
          else {
            for (t = $scope.items[i]['tags'].length - 1; t >= 0; t--) {
              tag = $scope.items[i]['tags'][t];
              if (tags.hasOwnProperty(tag)) {
                tags[tag].push(item);
              }
              else {
                tags[tag] = [item];
              }
            }
          }
        }
        $scope.tags = tags;
      });
    }
  ]);

