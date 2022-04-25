'use strict';



const arr = [1,2,3];
const newArr = [];

for (var i = 0; i < arr.length; i++) {
  let current = arr[i];
  newArr.push(current + 1)
}

console.log(newArr); // [2,3,4]


var arr1 = [1,2,3];
var arrMapped = arr1.map(function (num) {
  return num + 1;
});
var arrFiltered = newArr.filter(function (num) {
  return num > 5;
});

/*var newArr2 = [1,2,3]
  .map(function (num) {
    return num + 1;
  });
  .filter(function (num) {
    return num > 5;
  });*/


const data = [2, 7, 1, 8, 9, 2];
const mapear = (callback) => {
    const arrayResultados = [];
    for (const numero of data) {
        const resultado = callback(numero)

        //console.log(resultado);
        arrayResultados.push(resultado);
    }
    return arrayResultados;
};

const restar3 = (numero) => {
    return numero - 3;

}
console.log(mapear(restar3));

console.log(mapear((numero) => {
    return numero * 2
}));

console.log
    (mapear((numero) => {
    return numero * 3
    }));



    //map

const numeross = [2, 7, 1, 8, 9, 2];

const numerosMasDos = numeross.map((numero) => {
    return numero + 2;
})
console.log(numerosMasDos);


const users = [{
    nombre: "pepe",
    apellido: "gonzalez",
    edad: 32,
},
{
    nombre: "luis",
    apellido: "perez",
    edad: 22,
},
{
    nombre: "juan",
    apellido: "Arizte",
    edad: 29,
}
];
//map de usuarios le pasamos un callback al map y este map nos regresa array con todod slos resultados dejecutar el callback
//el callback se ejecuta un aves y se retirna un objeto opara cada ususraio que seria su nombre apellido y edda
//mal es un bucle que para ca ausuario v a ajecutar la paeticio de usuariocon nombre completo.
const usuariosConNombreCompleto = users.map((usuario) => {
    const nombreCompleto = `${usuario.nombre}  ${usuario.apellido}`;
    return { user: nombreCompleto, age: usuario.edad };
});

console.log(usuariosConNombreCompleto);


//filter
//recibe callbackk que se va ahecutar para dad lem del array y return considicon si se cumplke lo deja 
//sino se lo carga
//numca modifica el array orogin del mismo array nos regresa el original con los datos fltrados

const numberss = [2, 7, 1, 8, 9, 2];

const filtrarNumeros = numberss.filter((num) => {
    return num > 7;

})

console.log(filtrarNumeros);

//reduce
const numberArray = [2, 7, 1, 8, 9, 2];

const sumaTotal = numberArray.reduce((previus, num) => {
    const updatedNum = previus + num;
    return updatedNum;
    //return previus + num;
}, 0);

console.log(sumaTotal);

const userz = [{
    nombre: "pepe",
    apellido: "gonzalez",
    edad: 32,
    salario:18000,
},
{
    nombre: "luis",
    apellido: "perez",
    edad: 22,
    salario:21000,
},
{
    nombre: "juan",
    apellido: "Arizte",
    edad: 29,
    salario:24000,
}
];

/*const totalUsers = userz.reduce((previus, i) => {
    return previus + i;
}, 0);

console.log(totalUsers);*/

//SORT
//-1 => a antes que b
// 0 => lo deja como esta
// 1 (o más) => b antes que b
const db = [2, 5, 6, 7, 9, 2];

/*const numerosTotal = db.sort((a, b) => {
    if (a < b) {
        return 1;//-1
    } else if (a > b) {
        return -1;// 1
    } else {
        return 0;
    }
});
console.log(numerosTotal)*/

const numerosOrdenados = db.sort((a, b) => {
    return a - b;
})
console.log(numerosOrdenados);


const people = ['Julia','Miguel','Juan','María'];
const nombresOrdenador = people.sort( (a, b) => {

    return a.localeCompare(b);//el localeCompare te dice ( nos da el -1, 0, 1)
//-1 => a antes que b
// 0 => lo deja como esta
// 1 (o más) => b antes que b
});
console.log(people);

const userrz = [{
    nombre: "pepe",
    apellido: "gonzalez",
    edad: 32,
    salario:18000,
},
{
    nombre: "luis",
    apellido: "perez",
    edad: 22,
    salario:21000,
},
{
    nombre: "juan",
    apellido: "Arizte",
    edad: 29,
    salario:24000,
}
];

userrz.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
});

console.log(userrz)