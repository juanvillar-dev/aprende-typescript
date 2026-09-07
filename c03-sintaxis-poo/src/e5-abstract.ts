
/*------------------------------------------------------------------------------------------------------
    CLASES ABSTRACTAS
    - Es una plantilla para otras clsses, no se pueden instanciar directamente.
    - Pueden contener métodos y propiedades abstractas (sin implementación).
    - Las clases hijas deben implementar los métodos y propiedades abstractas.
------------------------------------------------------------------------------------------------------*/

abstract class Figura {
    protected abstract lados: number; // las clases hijas deben definir esta propiedad

    abstract area       (): number;

    abstract perimetro  (): number;
}







class Cuadrado extends Figura {
    protected lados = 4; // obligatorio definirlo

    constructor(private lado: number) {
        super();
    }

    area(): number {
        return this.lado * this.lado;
    }
    perimetro(): number {
        return 4 * this.lado;
    }
}







const x1 = new Cuadrado(10);
//const x2 = new Figura();          // ERROR: No se puede instanciar una clase abstracta
//console.log(x1.lados      );      // ERROR: La propiedad 'lados' es abstracta y no se puede acceder directamente desde la instancia.
console.log(x1.area()       );      // 100
console.log(x1.perimetro()  );      // 40



