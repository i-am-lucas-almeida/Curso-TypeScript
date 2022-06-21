// importar e exportar códigos em ts

//==> IMPORTAÇÃO DE ARQUIVOS

import greet from './ts/greet.js';

greet();

/***********************************************************/

//==> IMPORTAÇÃO DE VARIÁVEIS

import { x } from './ts/variables.js';

console.log(`Esse é o valor de x: ${x}`);

/***********************************************************/

//==> MÚLTIPLAS IMPORTAÇÕES

import { A, B, fruits } from './ts/multipleImport.js';

console.log(`A: ${A} / B: ${B}`);

fruits();

/***********************************************************/

//==> ALIAS PARA IMPORTAÇÃO - qnd se muda o nome do item importado

import { someName as Name } from './ts/changeName.js';

console.log(`Import Alias: ${Name}`);

/***********************************************************/

//==> IMPORTAR TUDO

import * as Numbers from './ts/importAll.js';

console.log(Numbers);
console.log(Numbers.a);
console.log(Numbers.anyNumbers());

/***********************************************************/

//==> IMPORTAÇÃO DE TIPOS OU INTERFACES

import {Human, Car} from './ts/myTypes.js';

const newUser: Human = {
    name: 'Lucas',
    age: 23
}

console.log(newUser);

const carro: Car = {
    name: 'Ferrari',
    year: 2019
}

console.log(carro);