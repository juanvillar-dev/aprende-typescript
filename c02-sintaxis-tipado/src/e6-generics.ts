
/*------------------------------------------------------------------------------------------------------
    TIPOS GENÉRICOS
------------------------------------------------------------------------------------------------------*/

interface Usuario { id: number, nombre: string }

type ApiResponse<T> = {
    data: T,
    err?: string;
}

const respuesta: ApiResponse<Usuario> = {
    data: {id: 1, nombre: "Juan"},
    err: "Error con la data",
}






/*------------------------------------------------------------------------------------------------------
    INTERFACES GENÉRICAS
------------------------------------------------------------------------------------------------------*/
interface Caja<T>{
    contenido: T;
}

const cajaTexto : Caja<string>  = {contenido: "Mensaje"};
const cajaNumero: Caja<number>  = {contenido: 20};






/*------------------------------------------------------------------------------------------------------
    FUNCIONES GENÉRICAS
------------------------------------------------------------------------------------------------------*/

function identidad<T> (valor: T): T{
    return valor;
}

const x21 = identidad<string> ("Hola");                     //  T = string
const x22 = identidad<number> (100)                         //  T = number






/*------------------------------------------------------------------------------------------------------
    RESTRICCIONES CON EXTENDS | Puedes limitar qué tipos son validos
------------------------------------------------------------------------------------------------------*/
function longitud<T extends {length: number}> (item: T) : number{
    return item.length;
}
const x23 = longitud("hola");                               // ✅ string tiene length
const x24 = longitud([1, 2, 3]);                            // ✅ array tiene length
// longitud(42);                                            // ❌ number no tiene length






/*------------------------------------------------------------------------------------------------------
    GENERICS CON MÚLTIPLES PARÁMETROS
------------------------------------------------------------------------------------------------------*/
function combinar<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const X25 = combinar<string, number>("edad", 30);           // ["edad", 30]







/*------------------------------------------------------------------------------------------------------
    EJERCICIOS
------------------------------------------------------------------------------------------------------*/

const usuarios: Usuario[] = [
    { id: 1, nombre: "Doriz" },
    { id: 2, nombre: "Juan" },
    { id: 3, nombre: "Yamil" },
]

const dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];






function arregloPorClave<T, K extends keyof T>(lista: T[], clave: K): any {
    return lista.map(x => x[clave]);
}

const x26 = arregloPorClave (usuarios, "id");
const x27 = arregloPorClave (usuarios, "nombre");






function encontrar<T> (lista: T[], condicion: (item: T)=> boolean): T|undefined {
    for (const item of lista)   
        if (condicion(item))    return item;

    return undefined;
}

const x28 = encontrar<string>   (dias, m => m.length >= 7);
const x29 = encontrar<Usuario>  (usuarios, u => u.nombre === "Juan");



