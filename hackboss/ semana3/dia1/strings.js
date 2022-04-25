"use strict";

console.log("Introduce estos datos:\nNombre\nEdad");

const nombreCompleto = "Pepe González";


const nombre = nombreCompleto.substring(0, 4);
const apellido = nombreCompleto.substring(5, 13);
const names = nombreCompleto.slice(0, 4);


//split
console.log(nombreCompleto);
console.log(nombre);
console.log(names.slice)
console.log(apellido)

const listFruta = "naranja, pera, manzana, mandarina, melocotón, sandía, manzana";

const arrayTrocitos = listFruta.split(","); 

console.log(arrayTrocitos);

//indexOf
//lastIndexOf


//const positionManzana = listFruta.indexOf("manzana")PRIMERA MANAZANA DE LA LA LISTA
const positionManzana = listFruta.lastIndexOf("manzana"); //ULTIMA MANZANA DE LA LISTA
console.log(positionManzana);


//startsWith para ver si empieza con ciertos parametro
//solo dice true o false
console.log(nombreCompleto.startsWith("Pepe"));

//endsWith para ver si termina con cierto parametros, da true o false
console.log(nombreCompleto.endsWith("Pepe"));

//replace recbe lo que quiere remplezar y solo remmpleza elpriemr paramtro que encuentre
console.log(listFruta.replace("manzana", "limón"));

//replceAll nos remmpelza aquellos valores que queemos cambiar 
console.log(listFruta.replaceAll("manzana", "limón"));

//CAMBIAR A MINUSCULAS TODO EL TEXTO
console.log(nombreCompleto.toLowerCase());
//CAMBIA A MAYUSCULAS TODO EL TEXTO
console.log(nombreCompleto.toUpperCase());

console.log(nombreCompleto.charAt(4));
console.log(nombreCompleto.charAt(nombreCompleto.length - 1));

//length largo

console.log(nombreCompleto.length);

//concat me junta textos, los concatena

console.log(nombre.concat("Rodriguez"));

console.log(nombre + "Rodriguez");

//repeat cuantas veces repetimos la string y nos da un txt 

console.log(nombre.repeat(5));

//padStart rellena con caracteres hasta que se cubra el total
//es decir digo 10 asteriscos sobre el nombre pepe entonces rellena de 6 caracteres más 4 de pepe daran 10 caracteres totales con astericos y lestras
console.log(nombre.padStart(10, "*"))

//padEnd lo mimso de padstar pero al inicio
console.log(nombre.padEnd(10, "*-"));


const creditCard = "234567890123445456";

const ultimoDigitos = creditCard.substring(12);//ME MUESTRA DEL CARACTER 12 EN ADELANTE 
const finalDigitos = creditCard.substring(creditCard.length - 4);//ME MUESTRA SOLO LOS ULTIMOS 4 CARACTERES DEL LARGO DEL DATO

const tarjetaAsteriscos = finalDigitos.padStart(16, "*");//RELLENA HASTA COMPLETYAR 16 CARACTERES 

console.log(tarjetaAsteriscos);

console.log(finalDigitos);
console.log(ultimoDigitos);

//trimstar,trimEnd, trim.  me quita espacios del final, principio y de cada lado 

const stringConEspacios = "       pepe       ";

console.log(stringConEspacios.trimStart());
console.log(stringConEspacios.trimEnd());
console.log(stringConEspacios.trim());

//template string
console.log('Y vino y  me dijo: "Qué haces!"');
console.log('Y vino y  me dijo: \"Qué haces???\"');

//entre corchetes se pone cualwuiwr valor que se evalue
const saludo = `Hola, mi nombre es ${nombre} y mi apellido ${apellido}, y tengo ${20 + 10} años`

console.log(saludo);

//En JS hay declarariones algo que realiza algo de js al hace const o let o var se hacen declaraciones de una variable.
//las funciones tambien son declaraciones.
//si se hace console log y muestra algo es una declaración
//console log solo se pone el valor que se quiere mostrar.
//Las expresiones son aquellas que expresan por ejemplo un string literal (console.log("hola"))



