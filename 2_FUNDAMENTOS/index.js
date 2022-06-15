"use strict";
// TSC --INIT CRIA UM ARQUIVO DE CONFIGS DO TS
// 1 - Type Number
let x = 10;
console.log(typeof x);
const num = 5.8643;
console.log(num.toPrecision(3));
// 2 - Type String
const nome = 'lucas';
console.log(typeof nome, nome.toLocaleUpperCase());
function yourName(name) {
    console.log('Seu nome é ' + name.toUpperCase());
}
yourName('Lucas');
// 3 - Type Boolean
const A = true;
console.log(typeof A);
// 4 - Inference e Annotation
// eu especifico
let annotation = 10;
// o Ts especifica auto
let inference = true;
console.log(inference, annotation);
// DESAFIO
const numA = 20.878;
const stringA = numA.toString();
console.log("A variável anterior era do tipo " + (typeof numA) +
    ' a nova variável é do tipo ' + (typeof stringA));
