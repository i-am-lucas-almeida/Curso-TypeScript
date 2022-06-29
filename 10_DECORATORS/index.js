"use strict";
/*
--> Adiciona funcionalidades extras em classes e funções
--> São adicionados a partir de @nome
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//==> EXEMPLO DE DECORATOR
function myDecorator() {
    console.log("iniciando o decorator");
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator:");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class someClass {
    // o decorator está atrelado a esse método
    testing() {
        return console.log("terminando a execução do método!");
    }
}
__decorate([
    myDecorator()
], someClass.prototype, "testing", null);
const someObj = new someClass();
someObj.testing();
/*****************************************************/
//==> MÚLTIPLOS DECORATORS
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou a');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('Executou b');
    };
}
class multipleDecorators {
    // executa primeiro quem está mais próximo do método
    testing() {
        console.log('Fim da execução!');
    }
}
__decorate([
    a(),
    b()
], multipleDecorators.prototype, "testing", null);
/*****************************************************/
//==> DECORATORS DE CLASSE - está ligado ao constructor
function ClassDec(constructor) {
    console.log(constructor.name);
}
let someUser = class someUser {
    constructor(name) {
        this.name = name;
    }
};
someUser = __decorate([
    ClassDec
], someUser);
const maria = new someUser('Maria Helena');
console.log(maria);
/*****************************************************/
//==> DECORATOR DE MÉTODO - modifica a execução de método
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator para colheita");
console.log(trator.showName());
/*****************************************************/
//==> ACCESSOR DECORATOR
//---> semelhante ao decorator de método
//---> só funciona em getters e setters
class Pokemon {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome é: ${this.name}`;
    }
    get showAge() {
        return `A idade é: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Pokemon.prototype, "showName", null);
__decorate([
    enumerable(false)
], Pokemon.prototype, "showAge", null);
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
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const userId = new Id("14");
console.log(userId);
console.log(userId.id);
/*****************************************************/
//===> EXEMPLO COM CLASS DECORATOR
function createDate(date) {
    date.prototype.createdDate = new Date();
}
let Book = class Book {
    constructor(name) {
        this.name = name;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(name) {
        this.name = name;
    }
};
Pen = __decorate([
    createDate
], Pen);
const book = new Book('Livro infantil');
const pen = new Pen('Caneta vermelha');
console.log(book);
console.log(pen);
/*****************************************************/
//==> EXEMPLO COM METHOD DECORATOR
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('O usuário já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post', newPost.alreadyPosted);
newPost.post('Meu segundo post', newPost.alreadyPosted);
newPost.post('Meu terceiro post', newPost.alreadyPosted);
/*****************************************************/
//==> EXEMPLO COM PROPERTY DECORATOR
function MaxCaracteres(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres.`);
            }
            else {
                value = newValue;
                console.log('Novo administrador cadastrado!');
                return;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(userName) {
        this.userName = userName;
    }
}
__decorate([
    MaxCaracteres(10)
], Admin.prototype, "userName", void 0);
const pedroAdmin = new Admin('pedroAdmin12345');
const anaAdmin = new Admin('anaAdmin22');
console.log(anaAdmin);
