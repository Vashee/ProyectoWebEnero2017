'use strict';

angular
  .module('parcial2App')
  .controller('GeoCtrl', function($scope, $geolocation, PasaDatos){

    $scope.$geolocation = $geolocation

    // basic usage
    $geolocation.getCurrentPosition().then(function(location) {
      $scope.location = location
    });

    // regular updates
    $geolocation.watchPosition({
      timeout: 60000,
      maximumAge: 2,
      enableHighAccuracy: true
    });
    $scope.coords = $geolocation.position.coords; // this is regularly updated
    $scope.error = $geolocation.position.error; // this becomes truthy, and has 'code' and 'message' if an error occurs
  
    $scope.id = PasaDatos.getID();
    $scope.productos = PasaDatos.getProductos();
    $scope.total = PasaDatos.getTotal();

  });