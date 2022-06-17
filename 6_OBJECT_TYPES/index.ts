//=> OBJETOS COM INTERFACE

interface Product { 
    name: string
    price: number
    isAvailable: boolean
}

function showDetails(product: Product) {

    console.log(`Nome: ${product.name}. Preço: R$${product.price}`);

    if(product.isAvailable) {

        console.log('Está disponível!');

    }

}

const item: Product = {
    name: 'Camisa',
    price: 20.99,
    isAvailable: true
}

showDetails(item);

/*********************************************************/

//=> PROPRIEDADES OPCIONAIS EM INTERFACES

interface User {
    name: string
    email: string
    role?: string
}

function showUser(user: User) {

    return console.log(JSON.stringify(user));

}

showUser({name: 'Lucas', email: 'email@exemplo.com'});
showUser({name: 'Ana', email: 'ana@email.com', role: 'Admin.'});

/***********************************************************/

//=> PROPRIEDADE READONLY - só pode ser alterada uma vez

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

console.log(fusca);

//fusca.wheels = 5;
// ñ permite alteração

/***********************************************************/

//=> INDEX SIGNATURE - ñ sabemos o nome das chaves, mas sabemos os tipos do array

interface CoordObj{
    [index: string]: number
}

let coord: CoordObj = {
    x: 5
}

coord.y = 10;

//coord.z = '15';

console.log(coord);

/*********************************************************************************/

//=> EXTENDING INTERFACES - herança de interfaces
// interface pode herdar as propriedades e tipos de outra

interface Human{
    name: string,
    age: number
}

// interface herda as propriedades da outra
interface SuperHuman extends Human{
    superPowers: string[]
}

const Lucas: Human = {
    name: 'Lucas',
    age: 23
}

const Goku: SuperHuman = {
    name: 'Goku',
    age: 30,
    superPowers: ['força', 'ki', 'voar']
}

console.log(Lucas);
console.log(Goku);

/************************************************************/

//=> INTERSECTIONS TYPES - concatena(&) interfaces

interface Character {
    name: string
}

interface Power {
    powers: string[]
}

interface Enemies {
    enemies: string[]
}

type SuperHero = Character & Power & Enemies;

const hero: SuperHero = {
    name: 'Super Man',
    powers: ['força', 'velocidade', 'visão laser'],
    enemies: ['Lex', 'Apocalipse']
}

console.log(hero);

/************************************************************/

//==> READONLY ARRAY - torna os itens do array imutáveis por atribuição
// podem ser mudados por método

let frutas: ReadonlyArray<string> = ['banana', 'mamão', 'limão'];

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

/************************************************************/

//=> TUPLAS - é um array que definimos a quantidade e tipos aceitos

type threeNumbers = [number,number,number];

const mostNumbers: threeNumbers = [1, 2, 3];

type nameAndAge = [string, number];

const user: nameAndAge = ['Lucas', 23];

/************************************************************/

//==> TUPLAS COM READ ONLY

function showNumbers(numbers: readonly [number, number]): void{

    console.log(numbers[0]);
    console.log(numbers[1]);

}

showNumbers([1, 2]);