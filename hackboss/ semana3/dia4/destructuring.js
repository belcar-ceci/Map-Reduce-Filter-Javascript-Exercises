'use strict';
const user = {
    nombre: "pepe",
    apellido: "glez",
    edad: 27,
}
const { nombre: patata, apellido, edad: pimiento } = user;

const { nombre, ...rest } = user;
/*const nombre = user.nombre;
const apellido = user.apellido
const edad = user.edad;*/

console.log(patata, apellido, pimiento);
console.log(nombre, rest);

const coche = {
    marca: "mazda",
    cv: 120,
    color: "rojo",
}

const { marca: marca, color: color } = coche;
console.log(marca, color);


const peliculas = [
  "El Señor de los Anillos",
  "Spiderman",
  "Batman",
  "Los Vengadores",
];

const [, , peli3, peli4] = peliculas;

console.log(peli3, peli4);

// Combinaciones

const usuario = {
  nombre: "pepe",
  apellido: "fernandez",
  edad: 38,
  direcciones: [
    {
      ciudad: "La Coruña",
      calle: "Perico de los palotes",
    },
    {
      ciudad: "Málaga",
      calle: "Cualquier plaza guay",
    },
  ],
};

const primeraDireccion = usuario.direcciones[0];

const { ciudad: miCiudadFavorita, calle: miCallePreferida } = primeraDireccion;

const {
  nombre: nameUser,
  apellido: apellido2,
  direcciones: [
    { ciudad: primeraCiudad, calle: primeraCalle },
    { calle: segundaCalle },
  ],
} = usuario;

console.log(nameUser, apellido2, primeraCiudad, primeraCalle, segundaCalle);
