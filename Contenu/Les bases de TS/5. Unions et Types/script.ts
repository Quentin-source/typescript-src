// Unions

let code: string | number | boolean;
code = 5;
code = "nouveau type";

let arr: (boolean | number)[];
arr = [true, 15, false, 10];

const foo = (param: number | string) => {
  console.log(param);
};
foo("coucou");
foo(25);

// Type Perso
// Type aliases
type mixedNumString = number | string;

const baz = (param: mixedNumString) => {
  console.log(param);
};
baz("hello");
baz(12);

type booleanOrObject = boolean | object;

const func = (param: booleanOrObject | mixedNumString) => {
  console.log(param);
};

func("LOL");
func(25);
func(true);
func({ base: true });

// type perso Objet
type wantedObject = {
  x: number;
  y: number;
  id: number | string;
  visible: boolean;
};

const button: wantedObject = {
  x: 10,
  y: 15,
  id: "12",
  visible: true,
};

console.log(button);
