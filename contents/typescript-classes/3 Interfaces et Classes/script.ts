interface Country {
  name: string;
  population: number;
  lang: string[];
}

class Norway implements Country {
  constructor(
    public name: string,
    public population: number,
    public lang: string[]
  ) {}
}

class France implements Country {
  constructor(
    public name: string,
    public population: number,
    public lang: string[]
  ) {}
}

const NorwayData = new Norway('Norway', 9, ['Norwegian']);
console.log(NorwayData);

const FranceData = new France('France', 65, ['Francais', 'Basque', 'Breton']);
console.log(FranceData);

class Aquitaine extends France {}

const AquitaineData = new Aquitaine('Aquitaine', 5, [
  'francais',
  'basque',
  'gasquon',
]);
