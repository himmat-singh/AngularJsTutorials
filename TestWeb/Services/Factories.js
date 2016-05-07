'use script';

(function(){
    var myApp = angular.module('myApp');
    
    myApp.factory('Numbers',function(){
        var factory ={};
        factory.Sum = function(x,y){
            return parseInt(x)+ parseInt(y);
        }
        return factory;
    });
    
})();