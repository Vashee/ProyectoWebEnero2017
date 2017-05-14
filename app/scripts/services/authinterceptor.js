'use strict';

/**
 * @ngdoc function
 * @name parcial2App.controller:authInterceptor
 * @description
 * # authInterceptor
 * Controller of the parcial2App
 */
angular.module('parcial2App')
  .factory('authInterceptor', function ($rootScope, $window) {
    return{
      request: function(config){
        config.headers = config.headers || {};
        if($window.localStorage.token){
          config.headers.Authorization = "Bearer "+$window.localStorage.token
        }
        return config;
      }
    };
    }).config(function($httpProvider){
      $httpProvider.interceptors.push('authInterceptor');
  });