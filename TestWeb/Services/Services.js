'use strict';

(function(){
    var myApp = angular.module('myApp');
    
    myApp.service('NumberService',function(Numbers){
        this.Add = function(x,y){
         return Numbers.Sum(x,y);
        }
    });
})();