"use strict";
//conversion implicita
console.log("18");
console.log(Number("18"));//pasar un string a numero
console.log(String(10))//convierte valor numero a string

console.log(Boolean(5));//cualquier numero da true menos 0 que da false, tmb si dor una string vacia  que tmb da false

console.log("2" + 2);//22

//en caso de resta prioriza convertir a numero
console.log(10 - "6");

console.log(10 + "5" + 2)
console.log(10 + 5 + "2")