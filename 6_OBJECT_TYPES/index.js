"use strict";
//=> OBJETOS COM INTERFACE
function showDetails(product) {
    console.log(`Nome: ${product.name}. Preço: R$${product.price}`);
    if (product.isAvailable) {
        console.log('Está disponível!');
    }
}
const item = {
    name: 'Camisa',
    price: 20.99,
    isAvailable: true
};
showDetails(item);
function showUser(user) {
    return console.log(JSON.stringify(user));
}
showUser({ name: 'Lucas', email: 'email@exemplo.com' });
showUser({ name: 'Ana', email: 'ana@email.com', role: 'Admin.' });
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
let coord = {
    x: 5
};
coord.y = 10;
//coord.z = '15';
console.log(coord);
const Lucas = {
    name: 'Lucas',
    age: 23
};
const Goku = {
    name: 'Goku',
    age: 30,
    superPowers: ['força', 'ki', 'voar']
};
console.log(Lucas);
console.log(Goku);
const hero = {
    name: 'Super Man',
    powers: ['força', 'velocidade', 'visão laser'],
    enemies: ['Lex', 'Apocalipse']
};
console.log(hero);
/************************************************************/
//==> READONLY ARRAY - torna os itens do array imutáveis por atribuição
// podem ser mudados por método
let frutas = ['banana', 'mamão', 'limão'];
// --> ñ pode ser modificado por atribuição
// frutas[3] = 'laranja';
frutas.forEach((item) => {
    console.log(`Fruta: ${item}`);
});
// --> pode ser modificado por método
frutas = frutas.map((item) => {
    return `Fruta: ${item}`;
});
console.log(frutas);
const mostNumbers = [1, 2, 3];
const user = ['Lucas', 23];
/************************************************************/
//==> TUPLAS COM READ ONLY
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
