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

var cochesTrabajar = [...cochesVenta];
var cocheFavorito = cochesTrabajar[0];
console.log(cocheFavorito);

var marques = [];
// for... guardar sols les marques.
for (let i = 0; i < cochesTrabajar.length; i++) {
    const marcaAguardar = cochesTrabajar[i].marca;
    marques.push(marcaAguardar);
}
console.log(marques);

marques = cochesTrabajar.map(coche => coche.marca);


//array sols seat
let seat = cochesTrabajar.filter(coche => coche.marca == 'seat');
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