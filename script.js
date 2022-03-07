/** array coches (5 en total) = 
model string, marca string, cilindrada num, trubo boolean 
2 son marca seat
**/

const cochesVenta = [

    {model: 'leon',
    marca: 'seat',
    cilindrada: 1200,
    turbo: true,},

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

];

const cochesTrabajar = [...cochesVenta];
const cocheFavorito = cochesTrabajar[2];
console.log(cocheFavorito);

let marques = [];
// for... guardar sols les marques.
for (let i = 0; i < cochesTrabajar.length; i++) {
    const marcaAguardar = cochesTrabajar[i].marca;
    marques.push(marcaAguardar);
}
console.log(marques);

const marque = cochesTrabajar.map(coche => coche.marca);
console.log(marque);

//array sols seat
const seat = cochesTrabajar.filter(coche => coche.marca == 'seat');
console.log(seat);

//funcio (valor), 
function valorExiste(valor) {
    console.log(valor);
    if (!valor) {
        throw Error('Tens que posar un valor de parametre');
        //valid tmb console.log('Tens que posar un valor de parametre');
    } else {
        return valor;
        
    }
}

let number = [1,2,3].push(4);
console.log(number);


