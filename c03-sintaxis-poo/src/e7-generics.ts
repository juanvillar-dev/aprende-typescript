
/*------------------------------------------------------------------------------------------------------
    TIPOS GENÉRICOS
-------------------------------------------------------------------------------------------------------*/
class ArrayList<T>{
    private lista   : T[] = [];


    get size(): number {
        return this.lista.length;
    }

    add(item: T): void{
        this.lista.push(item);
    }

    get(index: number): T | undefined {
        return this.lista[index];
    }
}


const listas = new ArrayList<string>();
listas.add("Enero");
listas.add("Febrero");
listas.add("Marzo");
listas.add("Abril");

console.log(listas.get(0));
console.log(listas);








/*------------------------------------------------------------------------------------------------------
    TIPOS GENÉRICOS | 
-------------------------------------------------------------------------------------------------------*/
class Repository<T extends {id: number}> {
    private lista: T[] = [];

    add(item: T): void{
        this.lista.push(item);
    }

    getById(id: number): T | undefined {
        return this.lista.find(x => x.id === id);
    }
}
interface User{
    id: number;
    nombre: string;
    activo: boolean;
}

interface Product{
    id: number;
    nombre: string;
    precio: number;
}

const usuarios  = new Repository<User>();
const productos = new Repository<Product>();
//const textos    = new Repository<String>();  // Error, no hay propiedad id : number