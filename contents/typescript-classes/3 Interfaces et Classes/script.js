"use strict";
class Norway {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const NorwayData = new Norway('Norway', 9, ['Norwegian']);
console.log(NorwayData);
const FranceData = new France('France', 65, ['Francais', 'Basque', 'Breton']);
console.log(FranceData);
class Aquitaine extends France {
}
const AquitaineData = new Aquitaine('Aquitaine', 5, [
    'francais',
    'basque',
    'gasquon',
]);
