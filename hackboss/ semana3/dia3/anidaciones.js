'use sttrict';

const user = {
    nombre: "Pepe",
    apellido: "Perez",
    edad: 30,
    direcciones: [
        {
            ciudad: "La coruña",
            calle:"Pepito",
        },
        {
            ciudad: "Malaga",
            calle: "Cualquier pais",
        }
    ]
}

//acceder a la ciudad de la seguda direccion de pepe

console.log(user.direcciones[1].ciudad);//malaga
console.log(user.direcciones[0].calle);//pepito

for (const address of user.direcciones) {
    console.log(address.ciudad);//entra a ciudades
    console.log(address);//entra a objetos direcciones
}

// OPTIONAL CHAINING

const usuarios = [
  {
    nombre: "pepe",
    apellido: "fernandez",
    edad: 38,
    direccion: {
      ciudad: "La Coruña",
      calle: "Plaza Pontevedra",
    },
  },
  {
    nombre: "pepe",
    apellido: "fernandez",
    edad: 38,
  },
];

for (const usuario of usuarios) {
  console.log(usuario.direccion?.ciudad);
}