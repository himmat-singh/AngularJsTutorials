/// <reference path="../Scripts/angular.min.js" />
'use strict';

(function () {
    var myApp = angular.module('myApp');

    myApp.controller('HomeController', ['$scope', function ($scope) {
        $scope.panels = [{ title: 'Panel 1', message: 'This is panel 1.' }
            , { title: 'Panel 2', message: 'This is panel 2.' }
            , { title: 'Panel 3', message: 'This is panel 3.' }
            , { title: 'Panel 4', message: 'This is panel 4.' }
        ];
        
       // $scope.Messages.msg = 'Home Controller message';
        
        $scope.myClick = function(){
            alert('Home Controller clicked...' + $scope.Messages.msg);
        };
    }]);
})();



