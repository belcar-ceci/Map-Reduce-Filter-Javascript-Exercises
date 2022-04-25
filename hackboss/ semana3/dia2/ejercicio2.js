'use strict';
// Recibiremos por prompt el nombre del usuario y un idioma ("ES", "EN", "GL")

// Saldrá un console.log saludando al usuario en el idioma seleccionado. Si el idioma no coincide con los indicados, saldrá un mensaje "Idioma selccionado no disponible".

// USAR SWITCH

const nombre = prompt("Dime tu nombre");
const idioma = prompt("Seleciona el idioma");

switch (idioma) {
  case "ES":
    console.log(`Hola ${nombre}  Has elegido ES`);
    break;

  case "EN":
    console.log(`Hola ${nombre}  Has elegido EN`);
    break;


  case "GL":
    console.log(`Hola ${nombre}  Has elegido GL`);
    break;
  default:
    console.log("No tenemos idioma seleccionado...");
}