
/*------------------------------------------------------------------------------------------------------
    READONLY: Una vez asignado un valor en la declaración, no se puede modificar.
------------------------------------------------------------------------------------------------------*/

class Dispositivo {
    readonly id         : string;
    readonly marca      : string;
    readonly categorias : string[];
    
    constructor(id: string, marca: string, modelo: string) {
        this.id         = id;
        this.marca      = marca;
        this.categorias = [];
    }
}


const disp1 = new Dispositivo('123', 'Apple', 'iPhone 14 Pro');
// disp1.id = '456';    // Error: No se puede asignar a 'id' porque es una propiedad de solo lectura.
disp1.categorias.push('Smartphone');  // Esto es permitido, ya que no estamos reasignando el arreglo, sino modificándolo.
console.log(disp1);








/*------------------------------------------------------------------------------------------------------
    OPTIONALY PROPERTIES (?)
    - Indica que la propiedad puede estar presente o no.
    - No es obligatorio
    - Se usan para DTOs o para objetos que pueden tener diferentes formas.
------------------------------------------------------------------------------------------------------*/

class Libro {
    titulo?     : string;
    autor?      : string;
    generos?    : string[];

    constructor(titulo?: string, autor?: string, generos?: string[]) {
        this.titulo  = titulo;
        this.autor   = autor;
        this.generos = generos;
    }

    toString(): string {
        return `Libro(titulo: ${this.titulo}, autor: ${this.autor}, generos: ${this.generos})`;
    }
}

const libro1 = new Libro('1984', 'George Orwell', ['Distopía', 'Ciencia Ficción']);
console.log(libro1);

const libro2 = new Libro('1984');
console.log(libro2);









/*------------------------------------------------------------------------------------------------------
    DEFINITIVE ASSIGNMENT (!)
    - Indica que la propiedad o variable será asignada en algún momento.
    - Es util cuando no iniciamos la propiedad en el constructor, pero sabes que luego estara asignada.
------------------------------------------------------------------------------------------------------*/

class Producto {
    id!     : number;
    nombre! : string;
    precio! : number;

    toString(): string {
        return `Producto(id: ${this.id}, nombre: ${this.nombre}, precio: ${this.precio})`;
    }
}

const prod1 = new Producto();

console.log(prod1.toString());
prod1.id = 1;
prod1.nombre = 'Laptop';
prod1.precio = 999.99;
console.log(prod1.toString());