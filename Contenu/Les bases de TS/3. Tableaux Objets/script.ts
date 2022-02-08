// Les tableaux

const fruits = ["pomme", "fraise"];
fruits.push("orange"); //ok
//fruits.push(5); //faux

const mixedArray = ["pomme", 50, [1, 2, 3]]; // cela crée une union de types
mixedArray.push([4, 5, 6]); // ok
//mixedArray.push([4,5,'5']); // erreur

let nums: number[];
//nums = 'b'; //error
//nums.push(5); // error num est déclaré en type mais n'existe pas encore
nums = [1, 2, 3];

let nums2: number[] = []; //la on declare un type et on instancit
nums2.push(5); // donc on peut push
console.log(nums2);

let random: any[];
random = [true, "fraise", 56];
console.log(random);

// Les Objets

const car = {
  name: "Audi",
  model: "A1",
  km: 70000,
};


//Syntaxe peu utilisée
let profile: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Joe",
  age: 15,
  hobbies: ["volley", "baseball"],
};

let obj : object; //ok




