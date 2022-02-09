"use strict";
// Unions
let code;
code = 5;
code = "nouveau type";
let arr;
arr = [true, 15, false, 10];
const foo = (param) => {
    console.log(param);
};
foo("coucou");
foo(25);
const baz = (param) => {
    console.log(param);
};
baz("hello");
baz(12);
const func = (param) => {
    console.log(param);
};
func("LOL");
func(25);
func(true);
func({ base: true });
const button = {
    x: 10,
    y: 15,
    id: "12",
    visible: true,
};
console.log(button);
