
/*------------------------------------------------------------------------------------------------------
    LITERAL TYPES | Permiten restringir valores a un conjunto fijo
------------------------------------------------------------------------------------------------------*/

type nivel = "bajo" | "medio" | "alto" | "extremo";

function definirNivel(nivel: nivel){                    // Solo acepta las 4 opciones de arriba
    console.log(`Escogiste el nivel ${nivel}`);
}





/*------------------------------------------------------------------------------------------------------
    UNION TYPES | Permiten combinar varios tipos en uno solo
------------------------------------------------------------------------------------------------------*/

type tipos = number | string | boolean;                 // Miralo como un nuevo Tipo Compuesto que acepta cualquiera de esos 3 tipos

function mostrarValor(valor: tipos){
    console.log(`Valor : ${valor}`);
}





/*------------------------------------------------------------------------------------------------------
    TEMPLATE LITERAL TYPES | Construyen cadenas dinámicas a partir de otros tipos
------------------------------------------------------------------------------------------------------*/

type clave = `${string}-${string}-${string}-${string}-${string}`;

function activarJuego(clave: clave){
    console.log(`Juego activado con: ${clave}`);
}





/*------------------------------------------------------------------------------------------------------
    OBJETOS TIPADOS | Puedes definir estructuras complejas
------------------------------------------------------------------------------------------------------*/
type videojuego = {
    readonly id : number,                   // No editable
    nombre      : string,
    generos     : string[],
    fecha       : Date,
    clave?      : clave                     // Propiedad opcional
}

function comprarJuego(producto: videojuego){
    const {nombre} = producto;
    console.log(`Juego comprado ${nombre}`);
}





/*------------------------------------------------------------------------------------------------------
    COMBINACIÓN DE TIPOS
------------------------------------------------------------------------------------------------------*/

type User   = { nombre  : string    };
type Admin  = { permisos: string[]  };

type UserAdmin = User & Admin;              // Intersection Types (&)

function regisrarAdmin(admin: UserAdmin){
    console.log(admin);
}