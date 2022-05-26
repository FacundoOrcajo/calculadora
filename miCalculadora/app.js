const process = require('process');
const calculator = require('./calculator')

let operator = process.argv[2].toLowerCase();
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];


let resultado = 0;
let operators = ['sumar','restar','multiplicar','dividir'];

if(operators.includes(operator)){

    if(!isNaN(numeroA) && !isNaN(numeroB)){
        if (operator === "sumar") {
            resultado = calculator.sumar(numeroA, numeroB);
        } else if (operator === "restar") {
            resultado = calculator.restar(numeroA, numeroB);
        } else if (operator === "multiplicar") {
            resultado = calculator.multiplicar(numeroA, numeroB);
        } else if (operator === "dividir") {
            resultado = calculator.dividir(numeroA, numeroB);
        } 
        console.log(resultado);
    }else {
        console.log('Tiene que tener valores númericos!');

    }
}else{
    console.log('La operación no está completada en el Calculator');
}