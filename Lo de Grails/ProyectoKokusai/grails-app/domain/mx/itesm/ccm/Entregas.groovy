package mx.itesm.ccm

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Entregas {
	int id
	String nombre
	String apellidos
	String direccion
	String productos
	int total

    static constraints = {
    	id unique:true
		nombre blank:false
		apellidos blank:false
		direccion blank:false
    }
}