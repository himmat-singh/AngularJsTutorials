/// <reference path="../Scripts/angular.min.js" />
'use strict';

(function () {
    var myApp = angular.module('myApp');
    myApp.controller('AboutController', ['$scope','$http', function ($scope,$http) {
        $scope.title = 'About';
        $scope.msg = 'You are on the about page.';
        //$http.get('http: //localhost/api/student/')
        $http({ method: 'GET', url: 'http://localhost/api/student' })
            .then(function (response) {
			console.log('successfully fetch data from webapi \n'+JSON.stringify(response.data));
			$scope.students = response.data;
		},function(err){
			console.log('error occured while fetching data from webapi : '+JSON.stringify(err));
		});
    }]);
})();