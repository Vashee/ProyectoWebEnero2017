'use strict';

/**
 * @ngdoc function
 * @name parcial2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parcial2App
 */
angular.module('parcial2App')
  .controller('PerfilCtrl',  function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });









  /*function ($scope,$log,$http, $location, PasaDatos) {

  	var  modelo={
    };

    $scope.modelo = modelo;

    $scope.listado = function(){
      $http.get('http://localhost:8082/entregas')
      .then(function(response){
        var listado = response.data;
        $scope.modelo.entregas = listado;
        //PasaDatos.setTotal($scope.modelo.entregas);
       	//$location.path('/repartidor_buscador');
      });
    }
  });*/
