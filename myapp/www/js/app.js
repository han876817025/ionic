// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  // .controller("trol",function ($scope,$timeout) {
  //   $scope.doRefresh=function () {
  //     $timeout(function () {
  //       $scope.$broadcast('scroll.refreshComplete')
  //     },500)
  //   }
  // })
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('list',{
                url:"/list",
                templateUrl:"../templates/list.html"
  }).state('list.home',{
    url:"/home",
    views:{
      "list-home":{
        templateUrl:"../templates/home.html"
      }
    }
  }).state("list.about",{
    url:"/about",
    views:{
      "list-about":{
        templateUrl:"../templates/about.html"
      }
    }
  }).state("list.other",{
    url:"/other",
    views:{
      "list-other":{
      templateUrl:"../templates/other.html"
      }
    }
  }).state("list.first",{
    url:"/first",
    views:{
      "list-home":{
        templateUrl:"../templates/first.html"
      }
    }
  }).state("list.detal",{
    url:"/detal/:id",
    views:{
      "list-home":{
        templateUrl:"../templates/detal.html",
        controller:'tt'
      }
    }

  })

  $urlRouterProvider.otherwise('/list/home')
}])
.controller("trl",function ($scope, $ionicBackdrop, $timeout,$http,$stateParams) {
    //一秒显示一个背景
    $scope.action = function() {
      $ionicBackdrop.retain();
      $timeout(function() {
        $ionicBackdrop.release();
      }, 1000);
    };
    $http({
      url:"json/img.json"}).success(function (data) {
      $scope.arr=data.img
    })
  $scope.fn=function () {
    console.log($stateParams.id)
  }


})
  .controller("tt",function ($scope,$http,$stateParams) {
     console.log($stateParams.id)
     $http({
             url:"json/travel.json"
     }).success(function (data) {
       console.log(data)
     })
  })
