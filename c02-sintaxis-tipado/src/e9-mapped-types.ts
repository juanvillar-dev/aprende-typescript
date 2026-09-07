
type User2 = {
    id: number;
    nombre: string;
    activo: boolean;
}

/*------------------------------------------------------------------------------------------------------
    MAPPED TYPES | Plantillas que generan nuevos tipos a partir de otros
------------------------------------------------------------------------------------------------------*/

type Mapeo <T> = {
    [k in keyof T] : T[k];
}

/* 
    - keyof T → genera un union type con las llaves de T.
    - T[k] → accede al tipo de la propiedad k en T.
    - [k in keyof T] → Es un MAPPED TYPE que itera sobre cada propiedad de T
    - El resultado es un nuevo tipo con la misma estructura que T.
*/






function getProp<T,K extends keyof T> (obj: T, clave: K){
    console.log(`${obj[clave]}` )
}
const nombre = getProp<User2, "nombre" | "id">({id: 1, nombre: "Juan", activo: true}, "nombre");
/*
    - K extends keyof T → K es un tipo genérico que solo puede ser una de las claves de T.
    - Esto asegura que solo se puedan acceder a propiedades válidas de T.
    - El resultado es el tipo de la propiedad especificada por K en T.
*/






/*------------------------------------------------------------------------------------------------------
    RECREANDO LOS UTILITY TYPES | Podemos crear tipos genéricos propios para transformar otros tipos
------------------------------------------------------------------------------------------------------*/

type Opcional<T> = {
    [K in keyof T] ?  : T [K];
}

type UserOpcional = Opcional<User2>;
// Resultado : { id?: number; nombre?: string; activo?: boolean }






type Estricto<T> = {
    [K in keyof T] -? : T[K];
}

type UserEstricto = Estricto<UserOpcional>






type SoloLectura<T> = {
    readonly [K in keyof T] : T[K];
}

type UserLectura = SoloLectura<User2>;
// Resultado : Una copia de User con propiedades readonly






type SoloStrings<T> = {
    [K in keyof T] : string
}

type UserString = SoloStrings<User2>






type AlgunasPropiedades<T, P extends keyof T> = {
    [K in P] : T[K];
}
