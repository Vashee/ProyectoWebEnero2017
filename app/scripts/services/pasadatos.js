'use strict';

angular.module('parcial2App')
  .factory('PasaDatos', function () {
    // Service logic
    var id,total, productos, entregas;
    return {
      setID: function (id) {
        this.id=id;
      },
      getID:function () {
        return this.id;
      },
      setTotal: function (total) {
        this.total=total;
      },
      getTotal:function () {
        return this.total;
      },
      setProductos: function (productos) {
        this.productos=productos;
      },
      getProductos:function () {
        return this.productos;
      },
      setEntregas: function (entregas) {
        this.entregas=entregas;
      },
      setEntregas:function () {
        return this.entregas;
      },
    };
  });
