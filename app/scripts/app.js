'use strict';

/**
 * @ngdoc overview
 * @name parcial2App
 * @description
 * # parcial2App
 *
 * Main module of the application.
 */

angular
  .module('parcial2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/repartidor_buscador', {
        templateUrl: 'views/repartidor_buscador.html',
        controller: 'buscadorCtrl',
        controllerAs: 'buscador'
      })
      .when('/repartidor_entrega', {
        templateUrl: 'views/repartidor_entrega.html',
        controller: 'GeoCtrl',
        controllerAs: 'appGeo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
