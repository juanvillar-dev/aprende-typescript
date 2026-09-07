class Personaje {
    nombre  : string;
    tipo    : "tanke" | "dps" | "soporte";
    vida    : number;
    habilidades: string[];


    constructor(nombre: string, tipo: "tanke" | "dps" | "soporte", vida: number, habilidades: string[]){
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.habilidades = habilidades;
    }


    mostrarInfo(): string {
        return `Nombre: ${this.nombre}
                \nTipo: ${this.tipo}
                \nVida: ${this.vida}
                \nHabilidades: ${this.habilidades.join(", ")}`;
    }

    
    //  MÉTODO NORMAL       : THIS APUNTA AL OBJETO INSTANCIADO
    recibirAtaque(damage: number): void {
        this.vida -= damage;  
    }


    //  FUNCTION EXPRESSION : THIS APUNTA AL OBJETO INSTANCIADO, PERO NO SE PUEDE USAR ANTES DE SU DEFINICIÓN
    recibirAtaque2 = function(damage: number): void {
        //this.vida -= damage;    // ERROR  
    }

    
    // ARROW FUNCTION       : THIS APUNTA AL CONTEXTO DONDE SE DEFINIÓ LA FUNCIÓN (EN ESTE CASO, AL OBJETO DE CLASE)
    recibirAtaque3 = (damage: number): void => {
        this.vida -= damage;  
    }



}