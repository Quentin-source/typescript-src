"use strict";
// Generics
const Londres = {
    name: 'Londres',
    pop: 10,
    additionalData: { area: 1572 },
};
const Paris = {
    name: 'Paris',
    pop: 10,
    additionalData: [{ area: 1572 }, { underground: true, lines: 51 }],
};
//Generics with Function
const AddRepairDate = (obj) => {
    const lastRepair = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepair });
};
const auto1 = AddRepairDate({ model: 'A1', km: 800, price: 10000 });
const auto2 = AddRepairDate({ model: 'A1', km: 800, price: 10000, color: 'white' });
console.log(auto1);
