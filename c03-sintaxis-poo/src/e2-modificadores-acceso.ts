/*
MODIFICADORES DE ACCESO
- public: accesible desde cualquier parte (por defecto).
- private: solo accesible dentro de la clase.
- protected: accesible dentro de la clase y sus subclases.

*/

/*------------------------------------------------------------------------------------------------------
    PUBLIC  | Acceso dentro y fuera de la clase
------------------------------------------------------------------------------------------------------*/
class Persona{
    nombre  : string;
    edad    : number;

    //  INICIALIZA LAS PROPIEDADES EN EL CONSTRUCTOR
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }


    saludar(): void{
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    toString(): string{
        return `Persona(nombre: ${this.nombre}, edad: ${this.edad})`;   
    }
}






/*------------------------------------------------------------------------------------------------------
    PRIVATE  | Acceso dentro de la clase, pero no fuera ni en subclases
------------------------------------------------------------------------------------------------------*/
class Persona2{
    private nombre  : string;
    private edad    : number;

    //  INICIALIZA LAS PROPIEDADES EN EL CONSTRUCTOR
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad   = edad;
    }

    saludar(): void{
        console.log(this.toString());
    }

    private toString(): string{
        return `Persona(nombre: ${this.nombre}, edad: ${this.edad})`;   
    }
}






class Empleado2 extends Persona2{
    private salario: number;

    constructor(nombre: string, edad: number, salario: number){
        super(nombre, edad);
        this.salario = salario;
    }

    pruebas(): void{
        // console.log(this.toString());    // Error: 'toString' es privado y solo se puede acceder dentro de la clase 'Persona2'.   
        // console.log(this.nombre);        // Error: 'nombre' es privado y solo se puede acceder dentro de la clase 'Persona2'.
    }
}






/*------------------------------------------------------------------------------------------------------
    PROTECTED | Acceso dentro de la clase y en subclases, pero no fuera de ellas
------------------------------------------------------------------------------------------------------*/
class Persona3{
    protected nombre  : string;
    protected edad    : number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad   = edad;
    }   

    saludar(): void{
        console.log(this.toString());
    }

    protected toString(): string{
        return `Persona(nombre: ${this.nombre}, edad: ${this.edad})`;   
    }
}





class Empleado3 extends Persona3{
    private salario: number;

    constructor(nombre: string, edad: number, salario: number){
        super(nombre, edad);
        this.salario = salario;
    }

    pruebas(): void{
        console.log(this.toString());
        console.log(this.nombre);              
    }

}