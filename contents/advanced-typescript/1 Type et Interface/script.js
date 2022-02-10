"use strict";
console.log("hello");
const shark1 = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
};
console.dir(shark1);
let obj = {
    prop1: 15,
    prop2: 16,
};
console.dir(obj);
const RedRose = {
    pollen: true,
    type: "vegetal",
    color: "Red",
    thorn: true,
};
console.dir(RedRose);
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Hello Japan");
    }
    else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
};
const Japanese1 = {
    lang: 'JA',
    food: ['Ramen', "Sushis"],
};
automaticResponse(Japanese1);
