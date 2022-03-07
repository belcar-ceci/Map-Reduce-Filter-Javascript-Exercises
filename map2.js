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
        hobby: "cocinar",
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
//forEach
console.log(students);
students.forEach((student, index ) => {
    console.log(student.name, index)
})

/**students.forEach((student, index) => {
    console.log(student.name, index)
})**/

//MAP

/*let newList = students.map(function(student){
    return "hola " + student.name;
})
console.log(newList);*/

//MAP
let newList = students.map(function(student){
    return "hola " + student.name;
})
console.log(newList);

let newList2 = students.map((e) => "Adios " + e.name);
console.log(newList2);

