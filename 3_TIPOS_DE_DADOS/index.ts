// ARRAYS

const numbers: number[] = [1, 2, 3];

numbers.push(4, 5);

numbers.forEach((i) => console.log(i));

const nomes: Array<string> = ['Lucas', 'Caio'];




// ANY - aceita qualquer tipo de dado (evitar o uso!!!)

const dados: any[] = [];

dados.push('Lucas', 5, true);

dados.forEach((item) => console.log(item));




// TIPAGEM NAS FUNÇÕES

function soma(num: number) {

    return (num + 2);

}

console.log('A soma é ' + soma(5));



// TIPAGEM DO RETORNO DE DADOS DA FUNÇÃO

function mensagem(name: string): string {

    // vai retornar uma string
    return 'Seja bem vindo ' + name;

}

console.log(mensagem('Lucas'));



// TIPAGEM DE OBJETOS

function getDados(data: { name: string, age: number }) {

    console.log(`Os dados são: ${data.name} e ${data.age} anos`);

}

const perfil = { name: 'Lucas', age: 23 };

getDados(perfil);




// PROPRIEDADES OPCIONAIS

function showNumbers(a: number, b: number, c?: number): string {

    return (`A = ${a} / B = ${b} / C = ${c}`);

}

console.log(showNumbers(5, 8));

// validação de propriedades opcionais

function showName(name: string, lastName?: string): string {

    if (lastName !== undefined) {

        return `Olá ${name} ${lastName}.`;

    }

    return `Olá ${name}.`;

}

console.log(showName('Lucas', 'Almeida'));

console.log(showName('Caio'));




// UNION TYPE - aceita dois ou mais tipos de dados diferentes

function showMoney(number: number | string) {

    return console.log(`Seu salário é: R$${number}`);

}

showMoney(1000);

showMoney('1200');

const dataClient: Array<number | string | boolean> = [23, 'Lucas', true];




// TYPE ALIAS - cria um tipo determinado e reaproveitável(ñ pode ser alterada)

type ID = string | number;

function showId(id: ID) {

    console.log(`O id é: ${id}`);

}

showId(423);
showId('964');




// INTERFACES - semelhante ao type alias e union types(pode ser alterada)

interface Perfil {

    name: string,
    age: number

}

function showPerfil(obj: Perfil) {

    return console.log(`Nome: ${obj.name} / Idade: ${obj.age}`);

}

const objeto: Perfil = {
    name: 'Lucas',
    age: 23
}

showPerfil(objeto);

// alterando interface

interface Person {
    name: string
}

interface Person {
    age: number | string
}

interface Person {
    locale: string
}

function showPerson(a: Person) {

    return console.log(a);

}

const person = {
    name: 'Lucas',
    age: '23',
    locale: 'RJ'
}

showPerson(person);



// LITERAL TYPES - permite colocar valores como tipos

type City = 'RJ' | 'SP' | 'MG';

function showLocale(locale: City) {

    return console.log(`Sua cidade favorita é: ${locale}`);

}

showLocale('RJ');



// NON-NULL ASSERTION OPERATOR

const p = document.getElementById('some-p');

// mostra ao ts que o elemento existe no DOM
console.log(p!.innerHTML);



// BIGINT - (presente no ES2020) serve para representar números inteiros maiores que 253.

let n: bigint

n = 1000n;

console.log(n);
console.log(typeof n);




// SYMBOL - (presente no ES2020) cria referência única para um valor.

let symbol_1: symbol = Symbol('A');

let symbol_2 = Symbol('A');

console.log(`Os valares das variáveis é igual ? ${symbol_1 === symbol_2}`);