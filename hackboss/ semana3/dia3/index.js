'use strict';
//arrays

const fruta = "manzana";
const fruta2 = "pera";
const fruta3 = "sandia";
const frut4 = "platano";


const listaFrutas = ["manzana", "pera", "sandia", "piña"]
console.log(listaFrutas);

const resultados = [2 + 6, 8 - 5, true || false, true && true, 5 > 3]
console.log(resultados)

console.log(listaFrutas[2]);

const posicionUsuario = 0;
console.log(listaFrutas[posicionUsuario])

listaFrutas[1] = "melocoton";
listaFrutas[4] = "albaricoque";
listaFrutas[10] = "mandarina";//agregar más pero las posiciones laa deja vacias.
console.log(listaFrutas)

//push al final añade
//INTRoducimos elemento al final del array

listaFrutas.push("uvas");
console.log(listaFrutas);

//pop elimina el ultimo elem de la lista
//quitamos ultiumo elleemnto del array
const ultimoElemento = listaFrutas.pop();
console.log(listaFrutas);//lista del ultimo eleemento
console.log(ultimoElemento);//muestra elem eliminado "uva"

//agrega PRIMER ELEMENTO A UNA LISTA
//agregamos un elemento al principio del array.
listaFrutas.unshift("melon");
console.log(listaFrutas);


//quita PRIMER elemento
//quitamos primer elemento del array
const primerElemento = listaFrutas.shift();
console.log(listaFrutas);//lista sin PRIMER elemento lista
console.log(primerElemento);// lista sin mostrar primer elem lista

// comparar array
//el array es la bolsa, y los valores es otra cosa nun ca hay dos arrays iguales.
console.log(["pepe", "lola"] === ["pepe", "lola"])

const arr1 = ["pepe", "lola"];
const arr2 = ["pepe", "lola"];

console.log(arr1 === arr2);//false nunca son iguales uno es arr1 y otro arr2 es por la nombre de la constante no por contenido

const arr3 = arr1;//apuntan al mismo array
console.log(arr1 === arr3);//true
arr1[0] = "Marcos";
console.log(arr1, arr3)// iguales

//slice
//no modifica el array pero me da el trzo de array que necesito.

const coches = ["mazda", "citroen", "ford", "peogeot"];
const dosCoches = coches.slice(0, 2);


console.log(coches);
console.log(dosCoches);

//SPLICE SI MODIFICA EL ARRAY ORIGINAL
const cochesRecortados = coches.splice(2, 1); //(posiicon y cuantos elimina)
console.log(cochesRecortados)//quita los valores desde la posicion (la posiicon y la cantidad)
console.log(coches)

//iterar array

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

