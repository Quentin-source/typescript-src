console.log("hello");

type Fish = {
  fin: number;
  element: string;
  gills: true;
};

type Shark = {
  weight: number;
  length: number;
};

type HammerHeadShark = Fish & Shark;

const shark1: HammerHeadShark = {
  fin: 3,
  element: "water",
  gills: true,
  weight: 500,
  length: 200,
};

console.dir(shark1);

let obj: {
  prop1: Number;
} & {
  prop2: number;
} = {
  prop1: 15,
  prop2: 16,
};

console.dir(obj);

//Lier des interfaces

interface Flower {
  pollen: true;
  type: "vegetal";
}

interface Rose extends Flower {
  color: string;
  thorn: boolean;
}

const RedRose: Rose = {
  pollen: true,
  type: "vegetal",
  color: "Red",
  thorn: true,
};

console.dir(RedRose);

//Union discriminante

type Japan = {
  lang: "JA";
  food: string[];
};

type Italy = {
  lang: "IT";
  food: string[];
};

type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
  if (country.lang === "JA") {
    console.log("Hello Japan");
  } else if (country.lang === "IT") {
    console.log("Hello Italy");
  }
};

const Japanese1 : Country = {
    lang:'JA',
    food:['Ramen',"Sushis"],
}

automaticResponse(Japanese1);

//Unknown number of props

interface Group{
    [name:string] : object

}

