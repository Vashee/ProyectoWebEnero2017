package proyectokokusai

import mx.itesm.ccm.Entregas
import proyectoKokusai.User
import proyectoKokusai.UserRole
import proyectoKokusai.Role

class BootStrap {

    def init = { servletContext ->
    	new Entregas(id:1,
    				nombre:"Juanito",
    				apellidos:"Escarcha",
    				direccion:"Lluvia 743, col. Jardines del Pedregal",
    				productos:"Flor Essence",
                    total:250).save()
    	new Entregas(id:2,
    				nombre:"Kitzi Dani",
    				apellidos:"Martin",
    				direccion:"Santa Clara 19, Col. Acapatzingo",
    				productos:"Flor Essence, Kindervital",
                    total:1250).save()
    	new Entregas(id:3,
    				nombre:"Jose",
    				apellidos:"Nieves",
    				direccion:"Cairales 113, Col. San Bonucci",
    				productos:"Floradix",
                    total:500).save()
    	new Entregas(id:4,
    				nombre:"Denise",
    				apellidos:"Alvidrez",
    				direccion:"Corazón de melón 69, Col. San Andreas",
    				productos:"Flor Essence, Floradix",
                    total:840).save()
    	new Entregas(id:5,
    				nombre:"John",
    				apellidos:"Johnson",
    				direccion:"Puente 41, Col. Huipulco",
    				productos:"Udo's",
                    total:1400).save()
    	new Entregas(id:6,
    				nombre:"Sam",
    				apellidos:"Salerno",
    				direccion:"Nova Eng 1A, Col. Lomas de Hidalgo",
    				productos:"Floradix, Kindervital",
                    total:750).save()
        Role rol1 = new Role("ROLE_ADMIN").save()
        User usuario1 = new User("Admin", "kokusai").save()
        //User usuario2 = new User("Kokusai", "admin").save()
        UserRole.create(usuario1, rol1, true);
        //UserRole.create(usuario2, rol1, true);
    }
    def destroy = {
    }
}
