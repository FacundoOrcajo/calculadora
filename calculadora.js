const process = require('process');

const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar= require('./multiplicar');
const dividir = require('./dividir');

let numeroA = +process.argv[2];
let numeroB = +process.argv[3];

/*console.log('resultado de la suma ',sumar(8,3));
console.log('resultado de la resta ',restar(8,3));
console.log('resultado de la multiplicación ',multiplicar(8,3));
console.log('resultado de la división ',dividir(8,3));*/