package mx.itesm.ccm

import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured
import mx.itesm.ccm.Entregas

@Secured(['ROLE_ADMIN'])
class EntregasController extends RestfulController {
	static responseFormats = ['json', 'xml']
	EntregasController() {
        super(Entregas)
    }
}
