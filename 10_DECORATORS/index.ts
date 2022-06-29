/* 
--> Adiciona funcionalidades extras em classes e funções
--> São adicionados a partir de @nome
*/

//==> EXEMPLO DE DECORATOR

function myDecorator() {

    console.log("iniciando o decorator");

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando decorator:");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

    }

}

class someClass {

    @myDecorator()

    // o decorator está atrelado a esse método
    testing() {

        return console.log("terminando a execução do método!")

    }

}

const someObj = new someClass();

someObj.testing();

/*****************************************************/

//==> MÚLTIPLOS DECORATORS

function a() {

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        console.log('Executou a');

    }

}

function b() {

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        console.log('Executou b');

    }

}

class multipleDecorators {

    @a()
    @b()

    // executa primeiro quem está mais próximo do método

    testing() {

        console.log('Fim da execução!');

    }

}

/*****************************************************/

//==> DECORATORS DE CLASSE - está ligado ao constructor

function ClassDec(constructor: Function) {

    console.log(constructor.name);

}

@ClassDec

class someUser {

    name

    constructor(name: string) {

        this.name = name;

    }

}

const maria = new someUser('Maria Helena');

console.log(maria);

/*****************************************************/

//==> DECORATOR DE MÉTODO - modifica a execução de método

function enumerable(value: boolean) {

    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        descriptor.enumerable = value;

    }

}

class Machine {

    name

    constructor(name: string) {

        this.name = name;

    }

    @enumerable(false)

    showName() {

        console.log(this);

        return `O nome da máquina é: ${this.name}`;

    }

}

const trator = new Machine("Trator para colheita");

console.log(trator.showName());

/*****************************************************/

//==> ACCESSOR DECORATOR
//---> semelhante ao decorator de método
//---> só funciona em getters e setters

class Pokemon {

    name?
    age?

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;

    }

    @enumerable(true)

    get showName() {

        return `O nome é: ${this.name}`;

    }

    @enumerable(false)

    get showAge() {

        return `A idade é: ${this.age}`;

    }

}

const pikachu = new Pokemon('Pikachu', 5);

console.log(pikachu);
console.log(pikachu.showAge);
console.log(pikachu.showName);

/*****************************************************/

//==> PROPERTY DECORATOR
//---> usado nas propriedades da classe
//---> no momento da definição podemos ativar uma função
//---> usado para validações

function formatNumber() {

    return function (target: Object, propertyKey: string) {

        let value: string

        const getter = function () {

            return value;

        }

        const setter = function (newValue: string) {

            value = newValue.padStart(5, "0");

        }

        Object.defineProperty(target, propertyKey, {

            set: setter,
            get: getter,

        });

    }

}

class Id {

    @formatNumber()

    id

    constructor(id: string) {

        this.id = id;

    }

}

const userId = new Id("14");

console.log(userId);
console.log(userId.id);

/*****************************************************/

//===> EXEMPLO COM CLASS DECORATOR

function createDate(date: Function) {

    date.prototype.createdDate = new Date();

}

@createDate

class Book {

    name

    constructor(name: string) {

        this.name = name;

    }

}

@createDate

class Pen {

    name

    constructor(name: string) {

        this.name = name;

    }

}

const book = new Book('Livro infantil');
const pen = new Pen('Caneta vermelha');

console.log(book);
console.log(pen);

/*****************************************************/

//==> EXEMPLO COM METHOD DECORATOR

function checkIfUserPosted() {

    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {

        const childFunction = descriptor.value;

        descriptor.value = function (...args: any[]) {

            if (args[1] === true) {

                console.log('O usuário já postou!');
                return null;

            } else {

                return childFunction.apply(this, args);

            }

        }

        return descriptor;

    }

}

class Post {

    alreadyPosted = false;

    @checkIfUserPosted()

    post(content: string, alreadyPosted: boolean) {

        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);

    }

}

const newPost = new Post();

newPost.post('Meu primeiro post', newPost.alreadyPosted);
newPost.post('Meu segundo post', newPost.alreadyPosted);
newPost.post('Meu terceiro post', newPost.alreadyPosted);

/*****************************************************/

//==> EXEMPLO COM PROPERTY DECORATOR

function MaxCaracteres(limit: number) {

    return function (target: Object, propertyKey: string) {

        let value: string;

        const getter = function () {

            return value;

        }

        const setter = function (newValue: string) {

            if (newValue.length > limit) {

                console.log(`O valor deve ter no máximo ${limit} caracteres.`);

            } else {

                value = newValue;
                console.log('Novo administrador cadastrado!')
                return;

            }

        }

        Object.defineProperty(target, propertyKey, {

            get: getter,
            set: setter,

        });

    }

}

class Admin {

    @MaxCaracteres(10)

    userName

    constructor(userName: string) {

        this.userName = userName;

    }

}

const pedroAdmin = new Admin('pedroAdmin12345');

const anaAdmin = new Admin('anaAdmin22');

console.log(anaAdmin);