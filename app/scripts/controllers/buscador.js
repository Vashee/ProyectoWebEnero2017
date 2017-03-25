'use strict';

/**
 * @ngdoc function
 * @name parcial2App.controller:buscadorCtrl
 * @description
 * # buscadorCtrl
 * Controller of the parcial2App
 */

angular.module('parcial2App')
  .controller('buscadorCtrl', function ($scope,$log,$http) {
    
    var  modelo={
    	//profesor : "Juan Velez",
    };

  	$http({
        method: 'GET',
        url: '/entregas.json'
        }).then(function successCallback(response) {
            $log.debug("successCallback"+response.data.entregas);
            $scope.modelo.entregas = response.data.entregas
          }, function errorCallback(response) {
            $log.debug("errorCallback");
    });

  	$scope.modelo = modelo;

  });
