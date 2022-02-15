// Generics

// Interface Reutilisable

interface City<T> {
  name: string;
  pop: number;
  additionalData: T;
}

const Londres: City<object> = {
  name: 'Londres',
  pop: 10,
  additionalData: { area: 1572 },
};

const Paris: City<object[]> = {
  name: 'Paris',
  pop: 10,
  additionalData: [{ area: 1572 }, { underground: true, lines: 51 }],
};


//Generics with Function

const AddRepairDate = <T extends object> (obj : T) => {
    const lastRepair = new Date();
    return {...obj, lastRepair}
}

const auto1 = AddRepairDate({model : 'A1', km : 800, price : 10000});
const auto2= AddRepairDate({model : 'A1', km : 800, price : 10000, color : 'white'});

console.log(auto1);