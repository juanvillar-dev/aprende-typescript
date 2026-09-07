const x1    : string    = "Hola mundo";

const x2    : number    = 10;

const x3    : boolean   = true;

const x4    : any       = "Cualquier tipo de dato";

const x5    : undefined = undefined;

const x6    : null      = null;

const x7    : object    = {nombre: "Juan", edad: 23};

const x8    : Date      = new Date();

const x9    : RegExp    = /[A-Za-z0-9]+/;

const x10   : Error     = new Error("Error al ejecuar 😭");

const x11   : string[]  = ["uno","dos","tres","cuatro"];

const x12   : Promise<any> = Promise.resolve(20);

const x13   : (string | number | string[] | {nombre: string})[] = ["uno", 2, ['t','r','e','s'], {nombre: "cuatro"}];

const x14   : any[]     = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13];




console.log(x14);





