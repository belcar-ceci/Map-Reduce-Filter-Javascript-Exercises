const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.log(meses);

const carrito = [
    { 
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
    },
    {
    nombre: 'Televisión 50 Pulgadas', 
    precio: 700},
    {
    nombre: 'Tablet', 
    precio: 300
    },
    { nombre: 'Audifonos', 
    precio: 200},
    { nombre: 'Teclado', 
    precio: 50},
    { nombre: 'Celular', 
    precio: 500},
    { nombre: 'Bocinas', 
    precio: 300},
    { nombre: 'Laptop', 
    precio: 800},
];
console.log(carrito);


/*Cómo saber si arrreglo de meses tiene el mes de febrero */
//forEach
meses.forEach(mes  => {
    if(mes=== 'Febrero') {
        console.log('Febrero si existe...');
    }
})

//.iNCLUDES, tmb para saber si Enero existe u otro mes del Array
//si se coloca algun mes del array por ejemplo ENERO dara TRUE
//sis e nombra mes que no en array Diciembre dara FALSE

const resultado = meses.includes('Enero');
console.log(resultado);


//.SOME
const siExiste = carrito.some(producto => producto.nombre === 'Teclado');
console.log(siExiste);

//Some arreglo tradicional
const siExiste2 = meses.some(mes => mes === 'Marzo');
console.log(siExiste2);