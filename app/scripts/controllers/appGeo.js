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
  
    $scope.id = PasaDatos.getID();
    $scope.productos = PasaDatos.getProductos();
    $scope.total = PasaDatos.getTotal();

  });