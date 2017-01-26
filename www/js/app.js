// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'hmTouchEvents'])
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
            .state('home', {
                name: 'home',
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })

            .state('puzzle', {
                name: 'puzzle',
                url: '/puzzle/:lvl',
                templateUrl: function ($stateParams) {
                    return 'templates/puzzle' + $stateParams.lvl + '.html'
                },
                controller: 'puzzleCtrl'
            });

        $urlRouterProvider.otherwise('/home');
    });

app.controller('commonCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {
    $rootScope.rounds = 0;
    $rootScope.defaultClass = 'home';

    var maintheam = $("#maintheam")[0];

    $rootScope.$watch('defaultClass', function () {
        if ($rootScope.defaultClass === 'home') {
            maintheam.pause();
        }

        else {
            maintheam.play();
            maintheam.volume = 0.4;
        }
    });
}]);
app.controller('homeCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.defaultClass = 'home';
    var fifthaudio = $("#selectsound")[0],
        seventhaudio = $("#denegadosound")[0];


    $rootScope.select = function () {
        if (fifthaudio.paused) {
            fifthaudio.play();
            fifthaudio.volume = 0.1;
        }else{
            fifthaudio.currentTime = 0
        }
    };

    $rootScope.nop = function ($event) {
        if (seventhaudio.paused) {
            seventhaudio.play();
            seventhaudio.volume = 0.1;
        }else{
            seventhaudio.currentTime = 0
        };
        $($event.currentTarget).effect("shake", {distance:1}, 200);
    }
}]);
app.controller('footerCtrl', ['$rootScope', function ($rootScope) {
    var sixthaudio = $("#volversound")[0];

    $rootScope.back = function () {
        if (sixthaudio.paused) {
            sixthaudio.play();
            sixthaudio.volume = 0.1;
        }else{
            sixthaudio.currentTime = 0
        }
    }
}]);
app.controller('puzzleCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$window', puzzleCtrl]);