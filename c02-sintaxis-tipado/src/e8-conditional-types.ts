
type Person = {
    nombre: string;
    edad: number;
}

type Product = {
    nombre: string;
    precio: number;
    stock: number;
}

/*------------------------------------------------------------------------------------------------------
    CONDITIONAL TYPES |
------------------------------------------------------------------------------------------------------*/
type EsString<T> = T extends string ? "si" : "no";

type X41 = EsString<string>; // "si"
type X42 = EsString<number>; // "no"
type x43 = EsString<string | number> // "si" | "no" -> Distribuye la condición sobre cada miembro del union type






type tieneNombre<T> = T extends { nombre: string } ? "si" : "no";

type X44 = tieneNombre<Person>;    // "si"
type X45 = tieneNombre<Product>;   // "si"
type X46 = tieneNombre<number>;     // "no"






type excluir<T, K> = T extends K ? never : T;

type X47 = excluir<string | number, string>; // number
