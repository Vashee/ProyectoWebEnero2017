'use strict';

/**
 * @ngdoc function
 * @name parcial2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parcial2App
 */
angular.module('parcial2App')
  .controller('CIniSesCtrl', function ($scope, $http, $window, $location) {

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
  			$window.sessionStorage.token = response.data.access_token
  			$location.path('/cliente_perfil');
  		});
  	}

  });
