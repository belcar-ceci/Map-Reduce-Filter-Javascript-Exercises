//Reailizar operacion sobre cada uno de los elementos de un array
//FOREACH;

const miArray = ["1" , "2" , "3", "4", "5", "6"];


/*
miArray.forEach((e, index) => { //recorre y suma 2 al elemento d ela lista
    console.log(Number(e)+2, index);
})
*/

miArray.forEach((e, index) => {
    console.log(e * index);
})

//recorre posición y numera los elem de la lista
miArray.forEach((e, index) => {
    console.log(e, index);
})