/// <reference path="../Scripts/angular.min.js" />
'use strict';

(function () {
    var myApp = angular.module('myApp');

    myApp.controller('LoginController', ['$scope','$state', function ($scope,$state) {
        $scope.username = 'user name';
        $scope.password = 'password';
        
        $scope.PrevUserDetails = {username:'user name',password:'password'};
        
        $scope.$watch('username',function(newVal,oldVal){            
           console.log('Watch: UserName changed to ['+ newVal + '] from ['+oldVal+']'); 
        });
        
        
        
        var login = function () { 
            
            
            if($scope.myForm.$valid && $scope.username != $scope.password){
                alert('Invalid login details...');
                return;
            }
            
            
            if($scope.username != $scope.PrevUserDetails.username){
                if(confirm('User name has been modified. Are you sure to move to next screen? '))            
                    $state.go('home');
            }
            else
                $state.go('home');
        }

        $scope.login = login;
    }]);

})();