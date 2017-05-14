'use strict';

/**
 * @ngdoc filter
 * @name angularTec1App.filter:asistentes
 * @function
 * @description
 * # asistentes
 * Filter in the angularTec1App.
 */
angular.module('proyectoAngularApp')
  .filter('prodBuscado', function ($log) {
    return function (items,mostrarItem) {
    
      var resultado=[];
      angular.forEach(items, function(item){
      	if(item.name ==true|| mostrarItem ==true){
      		resultado.push(item);

      	}
      });
      return resultado;
    };
  });


