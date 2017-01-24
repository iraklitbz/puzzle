// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])
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

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('puzzle1', {
                name: 'puzzle1',
                url: '/puzzle1',
                templateUrl: 'templates/puzzle1.html',
                controller: 'puzzleCtrl'
            })

            .state('puzzle2', {
                name: 'puzzle2',
                url: '/puzzle2',
                templateUrl: 'templates/puzzle2.html',
                controller: 'puzzleCtrl'
            })

            .state('puzzle3', {
                name: 'puzzle3',
                url: '/puzzle3',
                templateUrl: 'templates/puzzle3.html',
                controller: 'puzzleCtrl'
            })

            .state('puzzle4', {
                name: 'puzzle4',
                url: '/puzzle4',
                templateUrl: 'templates/puzzle4.html',
                controller: 'puzzleCtrl'
            })

            .state('puzzle5', {
                name: 'puzzle5',
                url: '/puzzle5',
                templateUrl: 'templates/puzzle5.html',
                controller: 'puzzleCtrl'
            })

            .state('puzzle6', {
                name: 'puzzle6',
                url: '/puzzle6',
                templateUrl: 'templates/puzzle6.html',
                controller: 'puzzleCtrl'
            });



        $urlRouterProvider.otherwise('/puzzle1');
    });

app.controller('commonCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.rounds = 0;
}]);
app.controller('puzzleCtrl', ['$rootScope', '$scope', '$state', '$stateParams', puzzleCtrl]);