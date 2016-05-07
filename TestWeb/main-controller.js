/// <reference path="Scripts/angular.js" />

'use strict';

(function(){
    var myApp = angular.module('myApp', ['ui.router']);
   

    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        //Login state
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'login/partial-login.html',
            controller: 'LoginController'
        })
        //Home state
        .state('home', {
            url: '/home',
            templateUrl: 'home/partial-home.html',
            controller:'HomeController'
        })
        //About state
        .state('about', {
            url: '/about',
            templateUrl: 'about/partial-about.html',
            controller: 'AboutController'
        });
    });


    myApp.controller('MainController', ['$scope','Numbers','NumberService', function ($scope,Numbers,NumberService) {
        $scope.msg = 'this is a sample website';
        
        $scope.Messages ={msg: 'Main Controller message'};
        
        $scope.result = Numbers.Sum(51,62);
        
        
        $scope.Numbers = Numbers;
        $scope.NumberService = NumberService;
        
        $scope.myClick = function(){
            alert('Calling from Main Controller : Home Controller clicked...');
        };
    }]);

})();