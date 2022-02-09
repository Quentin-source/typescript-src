function multiply(num1: number, num2 = 10, action?: string): number {
  return num1 * num2;
}
// ? pour indiquer un paramètre facultatif
// (): number => {} pour spécifier un retour

console.log(multiply(10, 20));

let foo: Function;
foo = () => {};

// Function signatures
let baz: (a: number, b: number) => number;

baz = (a, b) => a + b;

//Callback
function greetings(fn: (a: string) => void) {
  fn("Hello world!!");
}

function printToConsole(msg: string) {
  console.log(msg);
}

greetings(printToConsole);
