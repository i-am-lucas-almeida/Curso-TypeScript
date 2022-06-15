"use strict";
// => FUNÇÃO SEM RETORNO
function withoutReturn() {
    console.log('Função sem retorno!');
}
withoutReturn();
/*****************************************/
// => CALLBACK COMO ARGUMENTO - uma função chama a outra
function greeting(name) {
    return `O nome é ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Lucas');
preGreeting(greeting, 'Ana');
/***********************************************/
// => GENERIC FUNCTIONS - geralmente é um <U> ou <T>
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([1, 2, 3]));
function mergeArr(obj_1, obj_2) {
    return {
        ...obj_1,
        ...obj_2
    };
}
console.log(mergeArr({ name: 'Lucas' }, { age: 23, city: 'RJ' }));
/***********************************************/
/* => CONSTRAINTS NAS GENERICS FUNCTIONS - limita os tipos que podem ser usados nas Generics functions */
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(12, 56));
console.log(biggestNumber('45', '98'));
//console.log(biggestNumber(true, false));
//console.log(biggestNumber('54', 65));
/*****************************************************/
// => DEFINIR TIPOS DE PARÂMETROS
function mergeArrays(a, b) {
    let arr = [];
    return arr.concat(a, b);
}
console.log(mergeArrays([1, 2], [3, 4]));
//console.log(mergeArrays([1,2], ['a', 'b']));
console.log(mergeArrays([1, 2], ['a', 'b']));
/************************************************************/
// => PARÂMETROS OPCIONAIS
function greetingPeople(name, greet) {
    if (greet) {
        return console.log(`Olá ${greet} ${name}.`);
    }
    else {
        return console.log(`Olá ${name}`);
    }
}
greetingPeople('Lucas', 'sr.');
greetingPeople('Maria');
/********************************************************/
// => PARÂMETRO DEFAULT - já possuí um valor pré-definido
function mult(A, B = 2) {
    return A * B;
}
console.log(mult(10));
console.log(mult(2, 15));
/**********************************************************/
// => TIPO UNKNOWN - semelhante ao tipo any, mas requer validação de tipo
function makeSomething(x) {
    if (typeof (x) === 'string') {
        return console.log(`${x} é string.`);
    }
    else if (typeof (x) === 'number') {
        return console.log(`A soma de ${x} + 10 = ${x + 10}`);
    }
}
makeSomething('banana');
makeSomething(12);
/************************************************************/
// => TIPO NEVER - semelhante ao void mas não retorna nada
function errorMessage(msg) {
    throw new Error(msg);
}
//errorMessage('Algum erro!');
/**************************************************************/
// => REST OPERATOR COM TS (...)
function somaNumeros(...n) {
    return n.reduce((num, soma) => soma + num);
}
console.log(somaNumeros(5, 8, 6, 12));
console.log(somaNumeros(5, 62, 789, 45));
//console.log(somaNumeros('teste'));
/*******************************************************/
// => DESTRUCTURING EM PARÂMETROS - (desestruturação : tipagem)
function productDetails({ name, price }) {
    return `O nome do produto é ${name} e custa R$${price}`;
}
const product = {
    name: 'Camisa',
    price: 49.99
};
console.log(productDetails(product));
