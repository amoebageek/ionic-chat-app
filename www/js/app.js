// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
    .factory("Chats", function($firebaseArray) {
      var itemsRef = new Firebase("https://ionictestchatwithamoeba.firebaseio.com");
      return $firebaseArray(itemsRef);
    })
   .controller("chatsCtrl",["$scope","Chats",function($scope, Chats) {
        
                  $scope.chats = Chats;
                  $scope.savechat = function(message) {
                   
                   console.log(message)
                      $scope.chats.$add({
                        "message": $scope.message
                      });
                   };
            }]);
