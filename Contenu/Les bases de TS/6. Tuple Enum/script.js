"use strict";
// Tuple
// Avec une virgule un crée un tupple c'est un schèma exact pour un tableau
let tuple;
tuple = [true, 25];
// Enum ??
const Roles = {
    JAVASCRIPT: 1,
    CSS: 2,
    REACT: 3,
};
console.log(Roles);
var admin;
(function (admin) {
    admin[admin["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    admin[admin["CSS"] = 2] = "CSS";
    admin[admin["REACT"] = 3] = "REACT";
})(admin || (admin = {}));
console.log(admin);
