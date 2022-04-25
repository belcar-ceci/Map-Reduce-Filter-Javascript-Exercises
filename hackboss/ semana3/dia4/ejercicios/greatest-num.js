/**
 *
 * Crea una función a la que se le pase como argumento un array de números
 * y retorne el mayor.
 *
 * EJEMPLO: Si llamamos a getGreatestNum([4, 10, 6, 16, 1]), debe retornar 16
 */

"use strict";
const getGreatestNum = [4, 10, 6, 16, 1]

let posicion = 0;

for ( let numero of getGreatestNum ) {

 
  if (posicion < numero)
    posicion = numero;
}

console.log(posicion);



const nume = [4, 10, 6, 16, 1];

var minNmber = nume[0];

for (var i = 0; i < nume.length ; i++) {
    if (nume[i] < minNmber) {
        console.log('Anterior minimo: ' + minNmber + ', nuevo minimo: ' + nume[i]);
        minNmber = nume[i];
    }
}
console.log('Valor mínimo: ' + minNmber);


