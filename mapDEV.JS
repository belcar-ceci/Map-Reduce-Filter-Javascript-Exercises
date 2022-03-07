/*const listArray = arr.map(function (currentValue, index, currentArray) {
    //logic for new array

    /*función: esta será una función de devolución de llamada que se puede declarar antes de que se pueda agregar a medida que la usamos.
    currentValue: el valor actual es similar a arr[i] cuando iteramos sobre la matriz usando bucles for
    índex: índice actual del artículo
    currentArray: la matriz sobre la que estamos iterando. En este caso es "arr"

newArr devolverá una nueva matriz con nuestras modificaciones aplicadas. 
});*/


/*¿Dónde puedo usarlo?
Podemos usar map mientras iteramos sobre arreglos, normalmente donde usas for loop, podemos usar el método map en su lugar.
Podemos extraer la información valiosa de los objetos y devolverla en forma de matriz. Simplemente se puede usar en la matriz 
que tiene una longitud definida. Me encantaba usar map y abandoné "for loop" desde que comencé a aprenderlo, es una buena práctica 
para escribir código limpio. */

//SIN MAP

const list = [1,2,3,4,5];

const listNew = [];

for(let i=0; i<list.length; i++){
    listNew.push(list[i] *2);
}
console.log(listNew);

//CON MAP

const nueva = list.map((valor)=> valor *2); //**2 ES AL CUADRADO
console.log(nueva);


//Otro ejemplo - SIN USAR MAP

const listaDos = [0,1,2,3,4,5];

const listaNueva = [];

for (let i=0; i<listaDos.length; i++){
    listaNueva.push(listaDos[i] + i);
}
console.log(listaNueva);

//Otro ejemplo - USANDO MAP

const newArray = listaDos.map((value, index ) => value + listaDos[index] );
console.log(newArray);


//EJEMPLO MAP
/*Ejemplo 3: Extraiga el nombre completo y 
el cargo de los empleados del objeto dado */

let EmployeesObject = {
    Employees: [
        {
            userId: "rirani",
            jobTitleName: "Developer",
            firstName: "Romin",
            lastName: "Irani",
            employeeCode: "E1",
            region: "CA",
            phoneNumber: "408-1234567",
            emailAddress: "romin.k.irani@gmail.com",
        },
        {
            userId: "nirani",
            jobTitleName: "Database Admin",
            firstName: "Neil",
            lastName: "Irani",
            employeeCode: "E2",
            region: "CA",
            phoneNumber: "408-1111111",
            emailAddress: "neilrirani@gmail.com",
        },
        {
            userId: "thanks",
            jobTitleName: "Program Directory",
            firstName: "Tom",
            lastName: "Hanks",
            employeeCode: "E3",
            region: "CA",
            phoneNumber: "408-2222222",
            emailAddress: "tomhanks@gmail.com",
        },
    ],
};

const data = EmployeesObject.Employees;//es para entrar al objeto array 
//EmployeesObject que contiene a Employees

const nameAndJobTitle = data.map((employe)=> ({ ///FORMA UNA
    name: employe.firstName,
    lastname: employe.lastName,
    cargo: employe.jobTitleName,
}));
console.log(nameAndJobTitle);


const nameCargo = data.map( //FORMA DOS 
    (employe) =>
    `Name: ${employe.firstName},
    Cargo: ${employe.jobTitleName}`
)

console.log(nameCargo);

   




/**/