const students = [
    {
        email: 'maria@gmail.com',
        name: "Boris",
        hobby: "correr",
        salario: 3000,
    },
    {
        email: "hola@gmail.com",
        name: "Luis",
        hobby: "cantar",
        salario: 1500,
    },
    {
        email: "chAo@gmail.com",
        name: "Carmen",
        hobby: "cantar",
        salario: 800,
    },
    {
        email: "Stephen@gmail.com",
        name: "Percy",
        hobby: "saltar",
        salario: 1100,
    },
    {
        email: "john@gmail.com",
        name: "Rosa",
        hobby: "Leer",
        salario: 3000,
    },
]

//FILTER

//fILTRAR EXTRAR ELEM AQUELLAS PERSONAS CUYO HOBY SEA CANTAR
let newList = students.filter(function(e){
    return e.hobby === "cantar";

})
console.log(newList)

let newList2 = students.filter(function(student){
    return student.salario >= 1100;
})
console.log(newList2);

let newlist3 = students.filter((student) => student.salario >= 2000);
console.log(newlist3);

let newList4 = students.filter((e) => e.salario <= 2000 );
console.log(newList4);