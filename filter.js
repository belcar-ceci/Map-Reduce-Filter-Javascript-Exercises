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

const misCervezasGrandes = misCervezas.filter(index =>
    index.capacidad > 500);
    console.log(misCervezasGrandes);