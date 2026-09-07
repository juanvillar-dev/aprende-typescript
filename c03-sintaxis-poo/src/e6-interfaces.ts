
/*------------------------------------------------------------------------------------------------------
    INTERFACES
    - Son un contrato que define la forma de un objeto.
    - No se pueden instanciar, solo se implementan en clases.
    - Las clases que implementan una interfaz deben definir todos sus métodos y propiedades.
    - Las propiedades de una interfaz son públicas, no se pueden usar modificadores de acceso.
------------------------------------------------------------------------------------------------------*/

interface Usuario {
    nombre  : string;
    password: string
    mostrarInfo(): void;
}




interface UsuarioConstructor{
    new(...args: any[]): Usuario;       // contrato para el constructor
    limpiarSalon(): void;               // contrato para un método estático
}




class Estudiante implements Usuario {

    constructor(public nombre: string, public password: string, private carrera: string) {
        this.nombre     = nombre;
        this.password   = password;
        this.carrera    = carrera;
    }

    mostrarInfo(): void {
        console.log(`Soy ${this.nombre} y estudio ${this.carrera}`);
    }

    static limpiarSalon(): void {
        console.log("Estudiante limpiando el salón");
    }

    static abrirSalon(): void{
        console.log("Estudiante abriendo el salón");
    }
}




class Profesor implements Usuario {
    public     nombre  : string;
    public     password: string;
    private    materia : string;

    constructor(nombre: string, password: string, materia: string) {
        this.nombre     = nombre;
        this.password   = password;
        this.materia    = materia;
    }

    mostrarInfo(): void {
        console.log(`Soy ${this.nombre} y enseño ${this.materia}`);
    }

    static limpiarSalon(): void {
        console.log("Profesor limpiando el salón");
    }

    static abrirSalon(): void{
        console.log("Profesor abriendo el salón");
    }
}






function accion(usuario: UsuarioConstructor) {
    usuario.limpiarSalon();    
    //usuario.abrirSalon();      // ERROR: El método 'abrirSalon' no existe en el tipo 'UsuarioConstructor'
}

accion(Estudiante);   // Estudiante limpiando el salón
accion(Profesor);     // Profesor limpiando el salón























/*------------------------------------------------------------------------------------------------------
    INTERFACES MÚLTIPLES
    - Una clase puede implementar múltiples interfaces.
    - Esto permite que una clase tenga múltiples comportamientos definidos por diferentes interfaces.
------------------------------------------------------------------------------------------------------*/


interface Volador {
    volar(): void;
}

interface Nadador{
    nadar(): void;
}

interface Corredor{
    correr(): void;
}




interface Pajaro extends Volador, Corredor {
    piar(): void;
}




class Golondrina implements Pajaro {
    volar(): void {
        console.log("Golondrina volando");
    }

    correr(): void {
        console.log("Golondrina corriendo");
    }

    piar(): void {
        console.log("Golondrina piando");
    }
}




class Pato implements Volador, Nadador {
    volar(): void {
        console.log("Pato volando");
    }

    nadar(): void {
        console.log("Pato nadando");
    }
}