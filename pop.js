//POP
const miArray = [0, 1 , 2 , 3, 4, 5, 6];

const ultimoElemento = miArray.pop();
console.log(miArray);
console.log(ultimoElemento);


//SHIFT
const miArray1 = [1 , 2 , 3, 4, 5, 6];

const primerElemento = miArray1.shift();
console.log(primerElemento, miArray1);

//UNSHIFT
const miArray2 = [1 , 2 , 3, 4, 5, 6];

miArray2.unshift(0);
console.log(miArray2);

//SPLICE
const miArray3 = [1 , 2 , 3, 4, 5, 6];
miArray3.splice(2, 0, 'Hola');
//(posición a ingresar o la que se va a sustiir, lo que se va a quitar sino 0, el dato añadir o agregar)
console.log(miArray3);

const miArray3 = [1 , 2 , 3, 4, 5, 6];
miArray4.splice(3, 0, "Hola", "Arnau", "David");
console.log(miArray3);