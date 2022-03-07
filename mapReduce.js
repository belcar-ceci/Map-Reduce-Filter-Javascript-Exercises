const carros = 
[

    {
        modelo:'Ford Munstang',
        millaje: 25000,
        motor:5.0,
        produccion: '2017',
        precio: 35000,
    },
    {
        modelo:'Honda Accord',
        millaje: 10000,
        motor: 8.0,
        produccion: '2022',
        precio: 20000,
    },
    {
        modelo:'Mini Cooper',
        millaje: 15000,
        produccion: '2005',
        precio: 5000,
    },
];
// Metodo MAP
/*eL METODO map ejecuta uan función para cada elemento
del array creando UN NUEVO ARRAY con los resultados (sin modificar el
    array padre) */
const modelo = carros.map((carro) => carro.modelo);
console.log(modelo);

//map para incluir precio de autos en euros no en dolares,
//precio original * 0.85 valor para convertir en Euros.

const precioEuros = carros.map((carro) => carro.
precio*0.85);
console.log(precioEuros);

/*Evitar MAP cuando: 
a. no hace falta CREAR un nuevo array.
Si queremos mantener el array original entonces usar forEach, el Método MAP
es solo cuando vamos a mcrear un nuevo array del array original 
b. la callback no retorna nada.
*/

//Metodo FILTER
/*FILTER  al igual que map crea un n uevo array de los elementos que pasan
un criterio */

const carrosNuevos = carros.filter((carro) => carro.
produccion > 2010 && carro.millaje < 30000);

console.log(carrosNuevos)


/*Metodo REDUCE
e ejecuta una función(reducer) sobre CADA ELEMENTO 
DEL ARRAY(padre) devolviendo un array

*/

const num = [0, 1, 2, , 3, 4];

const suma = num.reduce((total, valorCorriente) => {
    console.log(`Total: ${total}`);
    console.log(`valorCorriente: ${valorCorriente}`);
    return total + valorCorriente;
}, 0);

console.log(suma);

const funcionReductora = (millajeInicial, valorCorriente) =>
millajeInicial + valorCorriente.millaje;

let x = carros.reduce(funcionReductora, 0);
console.log(x);

//MAP
//FUNCION PURA NO TRASNFORMA EL ARRAY ORIGINAL

const numero = [3, 10, 20, 50];
const doble = numero.map(function(num){
    return num * 2;
})
console.log(numero);
console.log(doble);


