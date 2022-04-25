
/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dado un array de frutas, genera un nuevo objeto en el que cada fruta pase a ser una
 * nueva propiedad del objeto. El valor asignado a esta propiedad debe ser el nº de veces
 * que la fruta se repite en el array.
 *
 *      const fruitBasket = ['naranja', 'naranja', 'limón', 'pera', 'limón', 'plátano', 'naranja'];
 *
 * Para el array anterior, el objeto resultante debería ser:
 *
 *      const fruits = {
 *          naranja: 3,
 *          limón: 2,
 *          pera: 1,
 *          plátano: 1
 *      };
 */
'use strict';

const frutas = [
    "naranja",
    "pera",
    "sandia",
    "naranja",
    "manzana",
    "naranja",
    "naranja",
    "limon",
    "melocoton",
    "piña",
    "sandia",

];

/*const fruitsCount = {
    naranja: 2,
    pera: 2,
    manzana: 2,
    sandia: 1,
};*/
//for of
//Comprobar si fruta creada en el objeto en la primera vuelta se acrea la priedad naranja y se guarda en 1  y se guarda 
//
/*for (let pendiente of frutas) {
    console.log(pendiente);
}*/


const fruitsCount = {};//OBJECT {naranja: 2, pera: 1, sandia: 1, manzana: 1}

for (let pendiente of frutas) {
    if (pendiente in fruitsCount) {
        fruitsCount[pendiente] += 1;
    } else {

        fruitsCount[pendiente] = 1;
    }
}

console.log(fruitsCount);

//quiero una function countFruits reciira array de frrutas y nos retorne
//el objeto con las frutas contadas
//Luego llamar a la funcion varias veces con array de frutas diuferentes y sacar por consola los objetos retornados.

const countFruits = (frutas) => {
    const fruitsCount = {};//OBJECT {naranja: 2, pera: 1, sandia: 1, manzana: 1}

for (let pendiente of frutas) {
    if (pendiente in fruitsCount) {
        fruitsCount[pendiente] += 1;//se suma uno
    } else {

        fruitsCount[pendiente] = 1;//sino se crea por peimera vez
    }
}

    return fruitsCount;
}
console.log(countFruits(["manzana", "poma"]));
/*
console.log(countFruits([
    "naranja",
    "pera",
    "sandia",
    "naranja",
    "manzana",
    "naranja",
    "naranja",
    "limon",
    "melocoton",
    "piña",
    "sandia",
])
);

console.log(countFruits([
    
    "naranja",
    "mandarina",
    "naranja",
    "toronja",
    "limon",
    "mango",
    "piña",
    "sandia",
])
);

*/