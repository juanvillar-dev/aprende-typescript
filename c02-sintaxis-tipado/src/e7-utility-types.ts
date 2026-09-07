
/*------------------------------------------------------------------------------------------------------
    UTILITY TYPES   | Permiten transformar y reutilizar otros tipos
------------------------------------------------------------------------------------------------------*/

type Producto = {
    id?     : number;
    modelo  : string;
    marca   : string;
    stock   : number;
    fecha   : Date;
    activo? : boolean; 
}


//  PARTIAL     | Convierte todas las propiedades de un tipo en opcionales
type ProductoParcial        = Partial   <Producto>;


//  REQUIRED    | Convierte todas las propiedades en obligatorias
type ProductoObligatorio    = Required  <Producto>;


//  READONLY    | Hace todas las propiedades inmutables
type ProductoPrivado        = Readonly  <Producto>;


//  PICK        | Selecciona un subconjunto de propiedades
type ProductoBasico         = Pick      <Producto, "modelo" | "marca">;


//  OMIT        | Excluye propiedades especificas
type ProductoSinID          = Omit      <Producto, "id" | "modelo" | "marca" >;






/*------------------------------------------------------------------------------------------------------
    RECORD      | Crea un objeto con claves y valores tipados
------------------------------------------------------------------------------------------------------*/

type Rol        = "admin" | "editor" | "viewer";
type Permisos   = Record<Rol, string[]>;    // Un objeto con 3 roles y acciones

const permisos_1 : Permisos = {
    admin   : ["crear", "editar", "borrar"],
    editor  : ["editar"],
    viewer  : ["leer"]
}






/*------------------------------------------------------------------------------------------------------
    RETURNTYPE  | Obtiene el tipo de retorno de una funcion
------------------------------------------------------------------------------------------------------*/

function crearUsuario() {
  return { id: 1, nombre: "Juan" };
}

type TipoUsuario = ReturnType<typeof crearUsuario>;
// { id: number; nombre: string }


