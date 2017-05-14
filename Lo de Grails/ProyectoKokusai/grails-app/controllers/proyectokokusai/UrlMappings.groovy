package proyectokokusai

class UrlMappings {

    static mappings = {

        "/entregas"(resources:"mx.itesm.ccm.Entregas")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}