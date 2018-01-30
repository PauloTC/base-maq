"use strict";

var a = 10;
var b = 15;
var suma = "La suma es  " + a + " + " + b + " = " + (a + b) + " en total";
console.log(suma);

var sumar = function sumar(a, b) {
  return a + b;
};
console.log(sumar(10, 9));