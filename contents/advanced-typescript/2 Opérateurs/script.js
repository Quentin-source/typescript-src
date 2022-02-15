"use strict";
console.log('hello');
// ** L'opérateur !
// Cela précise à TS que ca ne retrounera jamais NULL
const container = document.querySelector('container');
const notNullContainer = document.querySelector('container');
//Juste pour l'example normalement on fait du type casting
const legitContainer = document.querySelector('container');
const user1 = {
    title: 'Front end',
    salary: 30000,
};
const user2 = {
    title: 'Back End',
    salary: 40000,
    description: 'Truc de bof',
};
console.log(user2 === null || user2 === void 0 ? void 0 : user2.salary);
//Optional Parameter
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log('No message!');
    }
}
const House1 = {
    room: 4,
    price: 300000,
};
// ?? opérateur
const data = '';
const display = data || 'Hello World';
// ici on affichera data que si il n'est pas d'une valeur falsy
// '' ou 0 ou null
console.log(display);
//par contre comme ça on n'affichera pas data que si il est égal à null
const display2 = data !== null && data !== void 0 ? data : 'Hello World';
console.log(display2);
// Never
// Permet de préciser qu'une fonction ne retournera jamais de résultat
function alertUser(msg) {
    throw msg;
}
alertUser('Alerte comportement dangeureux');
