'use strict';
(
    
    function(){
    var app = angular.module('myApp');
    
    app.directive('myLogin', function(){
        return {
            restrict:'E',
            templateUrl:'Directives/LoginDirective.html'
        };
    });
    
    app.directive('myStudent',function(){
        var directive ={};
        directive.restrict ='E';
        directive.templateUrl='Directives/StudentDirective.html';
        directive.scope = {student:'='};
        /*directive.compile = function(element,attributes){
            var linkFunction = function($scope,element, attributes){
                
            }
            return linkFunction;
        }*/
        
        return directive;
    });
        
        app.directive('myTest',function(){
            var directive={};
            directive.restrict='EA';
            directive.templateUrl='Directives/TestDirective.html'; 
            return directive;
        });
})();