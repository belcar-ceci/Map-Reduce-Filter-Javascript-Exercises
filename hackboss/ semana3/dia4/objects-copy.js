'use strict';

const usuario = {
  nombre: "pepe",
  apellido: "gonzalez",
  direcciones: 
    {
      pais:  "España",
      provincia: "La Coruña",
    },

};

/*const copiaUsuario = usuario;
usuario.nombre = "lucas";

console.log(usuario, copiaUsuario);*/

//copias poco profundas, COPIAS DE PRIME RNIVEL CON SPREED OPERATOR

const copiasUsuario =  {...usuario, directiones: {...usuario.direcciones}};//esto es para logrra otra copia de direcciones y cmabiar sobre la copia no sobre el original
usuario.nombre = "Juan";
usuario.direcciones.pais = "México";
usuario.direcciones.provincia = "CDMX";
console.log(usuario, copiasUsuario);


//COPIAS MUY PROFUNDAS STRINGIFY-PARSE
//STRINGIFY PASAR OBJETO A TEXTO utilizar cuando hay muchas anodacoones

//JSONPARSE DE TEXTO A OBJETO crea celdas en memoria que van aetener el objeto o los objetos que contenga el usuario.
//jsonparse solo cuando hay mucha anidación
const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

console.log(JSON.parse(usuarioJSON));

const copiaUsuario2 = JSON.parse(JSON.stringify(usuario));

console.log(copiaUsuario2);

