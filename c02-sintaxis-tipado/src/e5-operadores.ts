
/*------------------------------------------------------------------------------------------------------
    KEY OF | Obtiene las propiedades de un tipo como un union de strings
------------------------------------------------------------------------------------------------------*/

type Monitor = {
    id?     : number;
    modelo  : string;
    marca   : string;
    size?   : number;
}

type ClavesMonitor = keyof Monitor;             // Propiedades de Monitor como Union Type de string
// Resultado: "id" | "modelo" | "marca"

function mostrarPropiedades (obj: Monitor, clave : keyof Monitor ):void{
    console.log(`${obj[clave]}`)
}






/*------------------------------------------------------------------------------------------------------
    TYPE OF | Crea un tipo a partir de un valor existente| Captura el tipo de una variable/constante.
------------------------------------------------------------------------------------------------------*/

const meses = ["enero","febrero","marzo","abril"] as const;

type Mes = typeof meses[number];
// Resultado: "enero" | "febrero" | "marzo" | "abril"

function ingresarMes(m: Mes){
    console.log(`Mes seleccionado: ${m}`);
}






const persona = {
  nombre: "Juan",
  apellido: "Villar",
  edad: 23,
  activo: true,
};

type Persona    = typeof persona;
//type Persona  = {nombre: string; edad: number; activo: boolean;};

type Claves     = keyof Persona;
//type claves   = "nombre" | "edad" | "activo"

type valores    = Persona[keyof Persona];
//type valores   = string | number | boolean






/*------------------------------------------------------------------------------------------------------
    INDEXED ACCESS TYPES | Acceder al tipo de una propiedad
------------------------------------------------------------------------------------------------------*/
type TipoModelo = Persona["nombre"  ];      // String | Undefined
type TipoSize   = Persona["edad"    ];      // Number | Undefined

// Analogía 
persona["edad"  ]; // 23
persona["nombre"]; // "Juan"

