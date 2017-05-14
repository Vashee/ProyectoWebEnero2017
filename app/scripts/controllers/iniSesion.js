'use strict';

/**
 * @ngdoc function
 * @name parcial2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parcial2App
 */
angular.module('parcial2App')
  .controller('IniSesCtrl', function ($scope, $http, $window, $location) {
    
    var  modelo={
    };
    $scope.modelo = modelo;

    if($window.sessionStorage.token){
      $scope.logeado= true;
    }else{
      $scope.logeado= false;
    }
    $scope.login = function(){
      $http.post('http://localhost:8082/api/login',{
        username : $scope.username,
        password : $scope.password
      }).then(function(response){
        $scope.autentificado = "adentro";
        $scope.logeado= true;
        $window.sessionStorage.token = response.data.access_token;
        $location.path('/repartidor_perfil');
      });
    };

    $scope.listado = function(){
      $http.get('http://localhost:8082/entregas')
      .then(function(response){
        var listado = response.data;
        $scope.modelo.entregas = listado;
      });
    };

    $scope.insertarAlumno = function(){
      var alumnoInsertar = {
        "nombre":$scope.nombre,"apellidos":$scope.apellidos,"matricula":$scope.matricula,
        "email":$scope.email,"edad":$scope.edad, "enabled":false
      };
      $http.post('http://localhost:8082/entregas', alumnoInsertar)
      .then(function(response){
        var respuesta = response.data;
        $scope.resultadoInsercion = respuesta;
      });
    }
  });