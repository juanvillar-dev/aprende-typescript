class Vehiculo {
    protected marca: string;
    protected modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender(): void {
        console.log(`${this.marca} ${this.modelo} está encendido.`);
    }

    apagar(): void {
        console.log(`${this.marca} ${this.modelo} está apagado.`);
    }

    toString(): string {
        return `Vehiculo(marca: ${this.marca}, modelo: ${this.modelo})`;
    }
}






class Auto extends Vehiculo {
    private puertas: number;

    constructor(marca: string, modelo: string, puertas: number) {
        super(marca, modelo); // Llama al constructor de Vehiculo
        this.puertas = puertas;
    }

    abrirPuertas(): void {
        console.log(`El auto ${this.marca} ${this.modelo} abre sus ${this.puertas} puertas.`);
    }

    // Sobrescribimos el método encender
    encender(): void {
        console.log(`El auto ${this.marca} ${this.modelo} arranca con llave.`);
    }

    // Sobrescribimos el método toString, usando super para llamar al método de la clase padre
    toString(): string {
        return `${super.toString()}, puertas: ${this.puertas})`;
    }
}



const auto1 = new Auto("Toyota", "Corolla", 4);
auto1.encender();           // El auto Toyota Corolla arranca con llave. (método override)
auto1.abrirPuertas();       // El auto Toyota Corolla abre sus 4 puertas.
console.log(auto1.toString());   // Vehiculo(marca: Toyota, modelo: Corolla), puertas: 4)
