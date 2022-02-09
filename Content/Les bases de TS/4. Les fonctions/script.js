"use strict";
function multiply(num1, num2 = 10, action) {
    return num1 * num2;
}
// ? pour indiquer un paramètre facultatif
// (): number => {} pour spécifier un retour
console.log(multiply(10, 20));
let foo;
foo = () => { };
// Function signatures
let baz;
baz = (a, b) => a + b;
//Callback
function greetings(fn) {
    fn("Hello world!!");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
