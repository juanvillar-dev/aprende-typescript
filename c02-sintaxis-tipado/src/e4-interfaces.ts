
/*------------------------------------------------------------------------------------------------------
    DEFINIR INTERFAZ | Parecida a type, pero con diferencias importantes
------------------------------------------------------------------------------------------------------*/

interface Vehiculo {
    readonly id : number;
    marca       : string;
    modelo      : string;
    area        : "agua" | "tierra" | "aire";
    velocidad?  : number;
    fecha?      : Date;
    
    encender(): void;          // método obligatorio
    apagar(): void;
}






/*------------------------------------------------------------------------------------------------------
    EXTENDER INTERFACES
------------------------------------------------------------------------------------------------------*/

interface Automovil extends Vehiculo {
    puertas         : number;
    tipoCombustible : "gasolina" | "diesel" | "eléctrico" | "híbrido";
}


interface Motocicleta extends Vehiculo {
    cilindrada      : number;
    tieneSidecar?   : boolean; // opcional
}


interface VehiculoDeCarga extends Vehiculo {
    capacidadCargaKg        : number;
    cargar(peso: number)    : void;             // Métodos propios
}





/*------------------------------------------------------------------------------------------------------
    EJEMPLO PRACTICO
------------------------------------------------------------------------------------------------------*/

const formula: Automovil = {
    id: 1,
    marca: "ferrari",
    modelo: "Formula 1",
    area: "tierra",
    puertas: 2,
    tipoCombustible: "gasolina",

    encender: function (): void {
        console.log(`${this.marca} ${this.modelo} esta encendido.`);
    },

    apagar: function (): void {
        console.log(`${this.marca} ${this.modelo} esta apagado.`);
    },
}






const camion: VehiculoDeCarga = {
    id      : 0,
    marca   : "Volkswagen",
    modelo  : "Constellation",
    area    : "tierra",
    capacidadCargaKg: 10000,  


    encender: function (): void {
        console.log(`El camion esta encendido.`);
    },
    apagar: function (): void {
        console.log(`El camion esta apagado.`);
    },
    cargar: function (peso: number): void {
        console.log(`Agregar ${peso} kg.`);
    },
}




