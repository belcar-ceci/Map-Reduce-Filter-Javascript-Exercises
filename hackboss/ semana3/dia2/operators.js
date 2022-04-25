'use strict';

//operadores de comparación

//=== !== == != < <= > =>
// comparamos si son iguales con y solo igual comparamos la variable pero 3 iguales comparamos dosvalores


const nombre = "ceci"
const edad = 18;

console.log(nombre === "pepe") //comparacion estricta 
console.log(nombre !== "pepe") 
console.log(edad === "18")//false solo mira el la valor absoluto sin mirar el tipo de dato
console.log(edad == "18") //true


console.log(edad !== "18")//true
console.log(edad != "18")//false

console.log(edad < 18);//
console.log(edad > 18);//
console.log(edad <= 18);//
console.log(edad >= 18);//

//operadores logicos

//&& || ?? //evaluan booleanos
//AND && deben complisrse todas las codnidones para dar true, sino false
// or ?? si se cumple una da true, solo una
// || un solo true ya es TRUE
console.log(nombre === "ceci" && edad > 18)//false
console.log(nombre === "ceci" && edad >= 18)//true

console.log(nombre === "ceci" || edad > 18)//true

console.log(0 && false);

console.log(false || "" || 0 || "ceci" || false || true)//solo evaluar un solo valor que de true

const colorFavorito = "azul";
const colores = colorFavorito || "rojo";

console.log(colores);

/*nullish coallestir operator ?? */
//solo responde si lo de la derecha es nulo o indefinido, SINO nos da el de la izquierda

const horasJugadas = 0;
const horagasJugadasFinal = horasJugadas ?? "no respondio"

console.log(horagasJugadasFinal);