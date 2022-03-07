//REDUCIR
/*El método Reduce ejecuta una función de reducción que usted 
proporciona como una devolución de llamada y devuelve una única salida. 
En otras palabras, toma la función iterable y reductora y luego devuelve 
un valor reducido.
REDUCER viene con alguna terminología como reductor y acumulador. */

/*
Syntax:
Regular JS:
let newArr = arr.reduce(function (accumulator, currentVal, index, currentArr) {
    //Reducer function
    *El acumulador es el valor con el que terminamos y el reductor es la acción que realizaremos para llegar a un valor.
    *acumulador es solo una palabra elegante para una matriz vacía o cero.
    *Reduce devolverá un valor y solo un valor, por lo tanto, el nombre es reduce
}, initialValue); 
*/

/*
Syntax:
Using ES6 arrow functions:
let newArr = arr.reduce((accumulator, currentValue, index, currentArray) => {
    //Reducer logic
    *función: esta será la función de devolución de llamada que verifica la condición si es verdadera o falsa para cada elemento
    *acumulador: el acumulador acumula los valores de retorno de la devolución de llamada. Significa que almacena todos los valores devueltos por la devolución de llamada. Puede ser un número, matriz u objeto.
    *currentValue: el valor actual es similar a arr[i] cuando iteramos sobre la matriz usando bucles for
    *índice: índice actual del artículo
    *currentArray: la matriz sobre la que estamos iterando. En este caso es "arr"
    *newArr: devolverá una nueva matriz reducida.
    *initialValue: un valor para usar como primer argumento de la primera llamada de la devolución de llamada.

}, initialValue);

*/

//Ejemplo 1: encontrar la suma de los números proporcionados
//SIN REDUCER
let scores = [99, 45, 67, 35, 76, 29, 78, 83, 69, 88];

let number = 0;
function numbersFor(arr){
    for(i=0; i < arr.length; i++){
        number += arr[i];
    }
    return number;
}
console.log(numbersFor(scores));

//CON REDUCER


const numbers = scores.reduce((suma, score) => suma + score);
console.log(numbers);

//Ejemplo 2: encuentre el salario promedio de los 
//empleados dados

const EmployeesObject = {
    Employees: [
        {
            userId: "rirani",
            jobTitleName: "Developer",
            firstName: "Romin",
            lastName: "Irani",
            preferredFullName: "Romin Irani",
            employeeCode: "E1",
            salary: 75000,
            region: "CA",
            phoneNumber: "408-1234567",
            emailAddress: "romin.k.irani@gmail.com",
        },
        {
            userId: "nirani",
            jobTitleName: "Database Admin",
            firstName: "Neil",
            lastName: "Irani",
            preferredFullName: "Neil Irani",
            employeeCode: "E2",
            region: "CA",
            salary: 90000,
            phoneNumber: "408-1111111",
            emailAddress: "neilrirani@gmail.com",
        },
        {
            userId: "thanks",
            jobTitleName: "Program Directory",
            firstName: "Tom",
            lastName: "Hanks",
            preferredFullName: "Tom Hanks",
            employeeCode: "E3",
            region: "CA",
            salary: 150000,
            phoneNumber: "408-2222222",
            emailAddress: "tomhanks@gmail.com",
        },
        {
            userId: "draks",
            jobTitleName: "Full Stack Developer",
            firstName: "Drake",
            lastName: "Smith",
            preferredFullName: "Drake Smith",
            employeeCode: "E3",
            region: "CA",
            salary: 150000,
            phoneNumber: "408-2222222",
            emailAddress: "tomhanks@gmail.com",
        },
    ],
};

const salarys = EmployeesObject.Employees;

const salarioProm = 
    salarys.reduce((value, employe) => value + employe.salary, 0) /
    salarys.length;
console.log(salarioProm);

