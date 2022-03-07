const productos = [
    {
        id: 'A1234',
        name: "Camiseta",
        precio: 500,
    },
    {
        id: 'A5678',
        name: "Zapatillas",
        precio: 2000,
    },
    {
        id: 'A9101',
        name: "Pantalón",
        precio: 1500,
    }
]
console.log(productos);

const productosDescuento = productos.map(function(producto){
    if(producto.precio < 1000) return producto;

    return {
        ...producto,
        precio: producto.precio * 0.9
    }
    
});

console.log(productosDescuento);



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

//map recorrer cada elemento y hacer alguna operacion 
//y que te regrese la misma misma con la operacion realizada
const misCervezasBebidas = misCervezas.map(index => {
    index.capacidad -= 100;
    return index;
});
console.log(misCervezasBebidas);//se hace un nuevo array con la capacidad restada de 100.


let miArray = [0, 1 , 2 , 3, 4, 5, 6];

miArray = miArray.map(function (i) { //igual que estos sin function miArray = miArray.map(i => i+3)
    return i+3;
})

console.log(miArray);


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
const misFacturas = facturas.map(i=> i.precio * i.cantidad * IVA)

misFacturas.forEach((i, index)=>console.log("Elemento", index, i))
console.log(misFacturas);

let total = 0;
misFacturas.forEach((i)=>total += i)

console.log(total);





