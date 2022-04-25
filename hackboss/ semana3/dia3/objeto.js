'use strict';

//objeto guarda pares de propiedades y valores
//creacion de objetos
const dataUser = {
    name: "Maria",
    birthyear: 1996,
    lastname: "Perez",

    color: "red"
};

const coche = {
    marca: "maz" + "da",
    caballos: 100 + 200,
};

console.log(coche);


//accdeder a valores de objetos, se accede porla proiedad o nombre del objetos

console.log(dataUser["name"]);

const loQueQuiereUser = prompt("Que info quieres")

console.log(coche[loQueQuiereUser]);//evaluar variable para saber que info me traigo del objeto
//esta expresion es para evaluar lo que llega del user
console.log(dataUser.name);//expresion mejor usada entras a buscar el dato que necesitas
console.log(dataUser.loQueQuiereUser);//este no porque no existe dentro del objeto

dataUser.name = "Marcos";

console.log(dataUser);

dataUser.age = 40;//añadimos al objeto otro dato age y se agregara en consola
console.log(dataUser)

dataUser["city"] = "Galicia"//añadimos el objeto otro dato city y se agrega al consola
console.log(dataUser)

dataUser.city = "Malaga"// añador otro elemento al objeto se suma aora con ciudad malaga
console.log(dataUser)

//Object.key(propiedades)
const piso = {
    ubi: "Galicia",
    precio: 2000000,
    m2: 100,
}

const propiedadesPiso = Object.keys(piso)
//texto que diga propiedad: valor 
for (const propiedad of propiedadesPiso) {
    console.log(`${propiedad}: ${piso[propiedad]}`)
}