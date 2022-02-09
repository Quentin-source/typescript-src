// interface permet de créer un objet avec un schèma prédéfini

interface Rocket {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
}

// comme type mais avec une syntaxe un peu diffèrente
//mais interface ce n'est que pour les objets
type Rocket2 = {
  reactors: number;
  vMax: number;
  takeOff: (action: string) => void;
};

// On peut cummuler les interfaces par contre
interface Rocket {
  price: number;
  carburant: string;
}

//on peut utiliser les interfaces avec une classe

class RocketFactory implements Rocket {
  reactors: number;
  vMax: number;
  price: number;
  carburant: string;
  constructor(
    reactors: number,
    vMax: number,
    price: number,
    carburant: string
  ) {
    this.reactors = reactors;
    this.vMax = vMax;
    this.price = price;
    this.carburant = carburant;
  }
  takeOff = (action: string) => {
    console.log(action);
  };
}

const Falcon = new RocketFactory(12, 25000, 25000000, "Ergol");
Falcon.takeOff("Decollage!!");
console.log(Falcon);
