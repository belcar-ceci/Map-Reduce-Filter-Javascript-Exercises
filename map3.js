const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
console.log(characters);

//***MAP***
//1. Get array of all names
const names = characters.map(e => e.name);
console.log(names);
//2. Get array of all gender
const genders = characters.map(e => e.gender);
console.log(genders);
//2. Get array of all heights
const heights = characters.map(e => e.height);
console.log(heights)
//3. Get array of objects with just name and height properties
const namesHeight = characters.map(e => e.name + " , " + e.height);
console.log(namesHeight);

const nameAndHeight = characters.map((character) => ({
    name: character.name,
    height: character.height,
}));
console.log(nameAndHeight);
//4. Get array of all first names

const firtsNames = characters.map(character => character.name.split(' ')[0]);
console.log(firtsNames);
