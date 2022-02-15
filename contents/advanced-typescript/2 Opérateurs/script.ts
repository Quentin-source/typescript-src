console.log('hello');

// ** L'opérateur !
// Cela précise à TS que ca ne retrounera jamais NULL

const container = document.querySelector('container');
const notNullContainer = document.querySelector('container')!;

//Juste pour l'example normalement on fait du type casting

const legitContainer = document.querySelector('container') as HTMLDivElement;

// ** L'opérateur ?
// Permets de notifier des propriétés facultatives
// mais aussi des objets qui peuvent etre undefined
// Ajoute de la tolérance à TS

type Job = {
  title: string;
  description?: string;
  salary: number;
};

const user1: Job = {
  title: 'Front end',
  salary: 30000,
};

const user2: Job = {
  title: 'Back End',
  salary: 40000,
  description: 'Truc de bof',
};

console.log(user2?.salary);

//Optional Parameter

function message(msg?: string) {
  if (msg) {
    console.log(msg);
  } else {
    console.log('No message!');
  }
}

// Optional interface Parameter

interface House {
  room: number;
  price: number;
  garage?: number;
}

const House1: House = {
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
const display2 = data ?? 'Hello World';

console.log(display2);

// Never

// Permet de préciser qu'une fonction ne retournera jamais de résultat
function alertUser(msg : string) :never{
    throw msg;
}

alertUser('Alerte comportement dangeureux');
