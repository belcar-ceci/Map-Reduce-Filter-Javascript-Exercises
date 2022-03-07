//REDUCE
const misCervezas = [
    {
        name: "Erdinger",
        capacidad: 500,
    },
    {
        name: "Delirium",
        capacidad: 300,
    },
    {
        name: "Diosa Blanca",
        capacidad: 700,
    },
    {
        name: "Caguama",
        capacidad: 1500,
    },
    {
        name: "Victoria",
        capacidad: 500,
    },
]
console.log(misCervezas);
/*const misCervezasBebidas = misCervezas.map(index => {
    index.capacidad -= 100;
    return index;
});
console.log(misCervezasBebidas);//se hace un nuevo array con la capacidad restada de 100.
*/
//TE VA AREGRESAR UN VALOR
//VALOR ESCALADA, TRABAJA LA OPERACION DE IZQUIERDA A DERECHA
//dos parametras el primero es la sumatorioa (acumulado)
// el segundo el nombre que damos a alemento al hacer el ciclo (siguiente)


const mililitrosRestantes = misCervezas.reduce(
    (acumulado, siguiente)=>
    acumulado + siguiente.capacidad, 0);
    console.log(mililitrosRestantes);

const militrosQueFaltan = (acumulado, siguiente)=>
acumulado + siguiente.capacidad;

let x = misCervezas.reduce(militrosQueFaltan, 0);
console.log(x);


const facturas = [
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad: 4,
    },
    {
        precio: 22,
        cantidad: 1,
    },
]
const IVA = 1.21;
const totalFactura = facturas.map(i=> i.precio * i.cantidad * IVA)

console.log(totalFactura);

const total = totalFactura.reduce((a, b) => a+b)

console.log(total);