/** array coches (5 en total) = 
model string, 
marca string, 
cilindrada num, 
turbo boolean 
2 son marca seat
**/

const cochesVenta = [
    {
    model: 'leon',
    marca: 'seat',
    cilindrada: 1200,
    turbo: true,
    },

    {model: 'mamifer',
    marca: 'madza',
    cilindrada: 1200,
    turbo: true,},

    {model: 'leon',
    marca: 'citroen',
    cilindrada: 100,
    turbo: true,},

    {model: 'leon',
    marca: 'audi',
    cilindrada: 1200,
    turbo: false,},

    {model: 'leon',
    marca: 'seat',
    cilindrada: 12,
    turbo: true,},

    {model: 'tiger',
    marca: 'citroen',
    cilindrada: 1300,
    turbo: true,},

];

let cochesTrabajar = [...cochesVenta];
let cocheMeGusta = cochesTrabajar[2];
console.log(cochesTrabajar); //me muestra todos los coches 
console.log(cocheMeGusta);//me muestra la posicion 2 que es el que me gusta;

const marcas = [];
//for para guaradar solo las marcas
for (let i=0; i < cochesTrabajar.length; i++) {
    const saveMarca = cochesTrabajar[i].marca;
    marcas.push(saveMarca);
    
}
console.log(marcas);

let models = cochesTrabajar.map(coche => coche.marca);
console.log(models);//map por marca


//array solo Citroen

let citroen = cochesTrabajar.filter(coche => coche.marca == 'seat');
console.log(citroen);


//function (valor)

function valorExiste (valor) {
    console.log(valor)
    if(!valor){
        throw Error ('Tienes que poner un valor de parametro');
    } else {
        return valor;
    }
}
/*let number = [1,2,3].push(4);
console.log(number);*/