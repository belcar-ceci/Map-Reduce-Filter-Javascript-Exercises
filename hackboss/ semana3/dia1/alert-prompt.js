"use strict"


const nombre = prompt('Cual es tu nombre?');
const age = prompt('Cual es tu edad?');
 


document.getElementById('ejercicio').innerHTML = `<h3>Soy ${nombre} y tengo ${age} años.<h3/>`;

//console.log("Su nombre es ", nombre, " tienen", age, "años")
const termsAccepted = confirm("Acepta terminos y condiciones");
console.log(termsAccepted);
