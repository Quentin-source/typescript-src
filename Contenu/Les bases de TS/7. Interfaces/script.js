"use strict";
// interface permet de créer un objet avec un schèma prédéfini
//on peut utiliser les interfaces avec une classe
class RocketFactory {
    constructor(reactors, vMax, price, carburant) {
        this.takeOff = (action) => {
            console.log(action);
        };
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
}
const Falcon = new RocketFactory(12, 25000, 25000000, "Ergol");
Falcon.takeOff("Decollage!!");
console.log(Falcon);
