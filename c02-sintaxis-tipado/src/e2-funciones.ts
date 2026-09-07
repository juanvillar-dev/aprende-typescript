/*------------------------------------------------------------------------------------------------------
    FUNCIONES 😁😁
------------------------------------------------------------------------------------------------------*/

function saludo(){
    console.log("hola mundo")
}






/*------------------------------------------------------------------------------------------------------
    CON PARAMETROS POR DEFECTO
------------------------------------------------------------------------------------------------------*/

function suma (a: number, b: number): number{
    return a + b;
}


function resta (a: number = 0, b: number = 0): number {
    return a - b;
}


const producto = (a: number = 0, b: number = 0): number => {
    return a * b;
}


const division = (a: number = 0, b: number = 1): string => {
    return "Resultado: " + (a / b).toFixed(2);
}





/*------------------------------------------------------------------------------------------------------
    CON PARAMETROS OPCIONALES
------------------------------------------------------------------------------------------------------*/
// atributo? = undefined
const presentar = (nombre: string, edad?: number): string => {
    return edad 
            ? `Hola, soy ${nombre} y tengo ${edad} años.`
            : `Hola, soy ${nombre}.`;

}





/*------------------------------------------------------------------------------------------------------
    OBJETOS COMO PARAMETROS
------------------------------------------------------------------------------------------------------*/

const saludar = ({nombre, apellido}: {nombre: string, apellido: string}) => {
    return `Hola ${nombre} ${apellido}`;
}


const saludar2 = (persona: {nombre: string, apellido: string}) => {
    const {nombre, apellido} = persona;
    return `Hola ${nombre} ${apellido}`;
}





/*------------------------------------------------------------------------------------------------------
    FUNCIONES COMO PARAMETROS
------------------------------------------------------------------------------------------------------*/
const operar = (a: number, b: number,   fn: (x: number, y: number) => number) =>{
    console.log(`Datos recibidos = [ a: ${a}, b: ${b}]`);
    return fn(a,b);
}





/*------------------------------------------------------------------------------------------------------
    VOID Y NEVER
------------------------------------------------------------------------------------------------------*/
function logMessage(message: string): void {    // Llega al final pero no retorna nada
    console.log(message);
}


function throwError(message: string): never {   // No llega al final, siempre lanza un error
    throw new Error(message);
}





/*------------------------------------------------------------------------------------------------------
    SOBRECARGA
------------------------------------------------------------------------------------------------------*/
function mostrarInfo(nombre: string): string;
function mostrarInfo(nombre: string, edad:number): string;
function mostrarInfo(user:{correo: string}): string;

function mostrarInfo(arg1: any, arg2?: any): string {
    if (typeof arg1 === "string" && typeof arg2 === "number") {
        return `${arg1} tiene ${arg2} años`;
    }

    if (typeof arg1 === "string" && arg2 === undefined) {
        return `${arg1} no dijo su edad`;
    }

    if (typeof arg1 === "object" && "correo" in arg1) {
        return `El correo del usuario es: ${arg1.correo}`;
    }

    throw new Error("Parámetros inválidos");
}

