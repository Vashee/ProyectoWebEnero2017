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
      .when('/repartidor_iniSesion', {
        templateUrl: 'views/repartidor_iniSesion.html',
        controller: 'IniSesCtrl',
        controllerAs: 'iniSesion'
      })
      .when('/cliente_iniSesion', {
        templateUrl: 'views/cliente_iniSesion.html',
        controller: 'CIniSesCtrl',
        controllerAs: 'clienteIniSesion'
      })
      .when('/repartidor_perfil', {
        templateUrl: 'views/repartidor_perfil.html',
        controller: 'PerfilCtrl',
        controllerAs: 'verPerfil'
      })
      .when('/cliente_perfil', {
        templateUrl: 'views/cliente_perfil.html',
        controller: 'CPerfilCtrl',
        controllerAs: 'cVerPerfil'
      })
      .when('/Kokusai_main', {
        templateUrl: 'views/Kokusai_main.html',
        controller: 'KokusaiCtrl',
        controllerAs: 'KokusaiMain'
      })
      .when('/cliente_mapa', {
        templateUrl: 'views/cliente_mapa.html',
        controller: 'CMapaCtrl',
        controllerAs: 'clienteMapa'
      })
      .when('/cliente_reportes', {
        templateUrl: 'views/cliente_reportes.html',
        controller: 'CReportesCtrl',
        controllerAs: 'clienteReportes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
