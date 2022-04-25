/**
 *
 *   1. Obtén todos los coches de la marca Audi.
 *      FILTER
 *
 *   2. Obtén un array con todos los colores de los coches de marca BMW.
 *      FILTER
 *      MAP
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *      FILTER
 *      REDUCE
 *
 *   4. Obtén un array con las distintas marcas de coches (no se pueden repetir).
 *      ESTE DE MOMENTO NO
 *
 *   5. Obtén un array con los coches de transmisión manual y de color negro.
 *      FILTER
 *
 *   6. Obtén la suma total de todos los precios.
 *      REDUCE
 *
 */

"use strict";

const coches = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
];
console.log(coches);

const misCoches = coches.filter((index) => {
    return index.marca === "Audi";
});
console.log(misCoches);
    

const misCochesColores = coches.filter(index =>
        index.marca = "color");
        console.log(misCochesColores);
    
/*const usuariosConNombreCompleto = users.map((usuario) => {
    const nombreCompleto = `${usuario.nombre}  ${usuario.apellido}`;
    return { user: nombreCompleto, age: usuario.edad };
});

console.log(usuariosConNombreCompleto); */

const cochesColor = coches.filter(car => {
    return car.marca = "BMW";
}).map(car => {
    return car.color;
})

console.log(cochesColor);

const cochesMedia = coches.filter((car) => {
    return car.marca = "Ford";
}).reduce((previus, car) => {
    return previus + car.precio;
}, 0);

console.log(cochesMedia);

const cochesMediaFord = coches.reduce((previus, car) => {
    return previus + car.precio;
}, 0);


const precioFord = cochesMediaFord / coches.length;
console.log(precioFord.toFixed(2));


const cochesTransmision = coches.filter((car) => {
    return car.transmision === "automatico";

});

console.log(cochesTransmision);

//5

const cochesTransmisionColor = coches.filter((car) => {
    return car.transmision === "automatico" &&
    car.color == "Negro";
})

console.log(cochesTransmisionColor);



//6. Reduce

const cochesTotalPrecio = coches.reduce((previus, car) => {
    return previus + car.precio;
}, 0);
console.log(cochesTotalPrecio);

