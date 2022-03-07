//FILTER
/*Sintaxis:
JS regulares:*/
/*let newArr = arr.filter(function (currentValue, index, currentArray) {
    //Condition for new array

    function: esta será la función de devolución de llamada que verifica la condición si es verdadera o falsa para cada elemento
    currentValue: el valor actual es similar a arr[i] cuando iteramos sobre la matriz usando bucles for
    index: índice actual del artículo
   currentArray: la matriz sobre la que estamos iterando. En este caso es "arr"

newArr devolverá una nueva matriz con nuestras modificaciones aplicadas.
});

/*Sintaxis:
JS regulares: 
Usando las funciones de flecha ES6:*/

/*let newArr = arr.filter((currentValue, index, currentArray) => {
    // Condition for new array
});

*/

/*Ejemplo 1: Encuentra cuántos estudiantes pasan la prueba
Se le proporcionan las calificaciones de los estudiantes, las calificaciones para aprobar son 35, 
debe encontrar cuántos estudiantes aprobaron la prueba. */

let marks = [34, 56, 67, 12, 98, 71, 45, 32];

//SIN FILTER

let alumnosAprobados = 0;
for (let i=0; i<marks.length; i++){
    if(marks[i] >35){
        alumnosAprobados++;
    }
}
console.log(alumnosAprobados);//5

//CON FILTER


const passed = marks.filter((value) => value > 35).length;
console.log(passed);

/*Ejemplo 2: Encuentra perros de la matriz dada
Devuelve la matriz de animal que tiene especie perro. */

let animals = [
    { name: "FluffyKins 🐇", Species: "rabbit" },
    { name: "DexLuthor 🐕", Species: "dog" },
    { name: "Trenton 🐕", Species: "dog" },
    { name: "Joey 🐕", Species: "dog" },
    { name: "FetchFishy 🐟", Species: "fish" },
    { name: "Dianna 🐟", Species: "fish" },
    { name: "CatePurry 🐈", Species: "cat " },
    { name: "BobBear 🐻", Species: "bear" },
    { name: "Todd 🐻", Species: "bear" },
    { name: "AlexLeon 🦁", Species: "lion" },
];

//SIN FILTER
let dogSearch = [];
for(let i=0; i<animals.length; i++){
    if(animals[i].Species == "dog") {
        dogSearch.push(animals[i]);
    }

}
console.log(dogSearch);

//CON FILTER

const showDog = animals.filter((animal) => animal.Species == "dog");
console.log(showDog);