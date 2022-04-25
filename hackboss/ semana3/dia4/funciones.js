'use strict';

/*const nombre = prompt("Dime tu nombre");

alert(`hola ${nombre}`);

if (estadoAnimo === "bien") {
    alert("Me alegro")
} else if(estadoAnimo === "mal") {
    alert("lo siento")
} else {
    alert("lo siento, no entendi")
}*/
//funcion recibe datos /parametros para operar con ellos
function suma(a, b) {
    console.log(a + b);
}

suma(2, 3);
suma(2, 4);
suma("hola ", "samu");


const suma2 = (c, d) => {//function arrow fuction
    return c + d;//return es lo que devuelve una funcion despue sd ejecurtarse
}
const resultado = suma2(1, 9);
console.log(resultado)

console.log(suma2(1, 8));


const resultadoo = [suma(2,5), 10];
console.log(resultadoo);

function saludar(nombre, idioma) {
    return 'Me llamo' + nombre + 'y hablo' + idioma;
}
console.log(saludar(" Cecilia", " ES"))