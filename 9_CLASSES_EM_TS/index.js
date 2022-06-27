"use strict";
//==> CAMPOS EM CLASSES
//---> campos sem valores definidos:
class User {
}
const createUser = new User();
console.log(createUser);
createUser.name = "Lucas";
createUser.age = 23;
//createUser.job = "Developer";
console.log(createUser);
/*********************************************************/
//==> CONSTRUCTOR
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pessoa = new NewUser('Ana Maria', 25);
console.log(pessoa);
/*********************************************************/
//==> PROPRIEDADES READONLY - inicia com valor e torna imutável
class Car {
    constructor(name) {
        this.rodas = 4;
        this.name = name;
    }
}
const corola = new Car('Corola');
console.log(corola);
/*********************************************************/
//==> HERANÇA E SUPER
class CarCharacters extends Car {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}
const Ferrari = new CarCharacters('Ferrari Modelo 2.8', 'vermelha');
console.log(Ferrari);
/*********************************************************/
//==> MÉTODOS EM CLASSES
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    discount(n) {
        return `Preço com desconto: 
            R$${(this.price * (100 - n) / 100).toFixed(2)}`;
    }
}
const shirt = new Product('Camisa Polo', 25.99);
console.log(shirt);
console.log(shirt.discount(10));
/*********************************************************/
//==> THIS EM CLASSES - se refere ao objeto em si
class Moto {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    showDetails() {
        return `Caminhão de nome ${this.name} e modelo ${this.model}`;
    }
}
const moto = new Moto('Moto Honda', 254689);
console.log(moto);
/*********************************************************/
//==> GETTERS - método para ler e retornar propriedades dos objetos
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `O nome completo é ${this.name} ${this.surname}`;
    }
}
const ana = new Person('Ana', 'Maria da Silva');
console.log(ana);
console.log(ana.fullName);
/*********************************************************/
//==> SETTER - método para modificar/atribuir valores
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('O valor de (x) foi salvo!');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('O valor de (y) foi salvo!');
    }
    get coords() {
        return `X = ${this.x} / Y = ${this.y}`;
    }
}
const myCoord = new Coords();
myCoord.fillX = 23;
myCoord.fillY = 12;
console.log(myCoord.coords);
class postBlog {
    constructor(title) {
        this.title = title;
    }
    titleBlog() {
        return `O título do post é: ${this.title}`;
    }
}
const title = new postBlog('Meu primeiro post no blog!');
console.log(title.titleBlog());
/*********************************************************/
//==> OVERRIDE DE MÉTODOS - substituí o método de classe herdada
class Base {
    someMethod() {
        return console.log('Método 1');
    }
}
class NewBase extends Base {
    // subscreve o método da classe pai
    someMethod() {
        return console.log('Método 2');
    }
}
const base = new NewBase;
base.someMethod();
/*********************************************************/
//==> VISIBILIDADE: PUBLIC - modo default
//---> qualquer método ou prop. da classe pai, acessível na classe filha
class X {
    constructor() {
        this.x = 10;
    }
}
const instanceX = new X;
console.log('visibilidade public: ', instanceX.x);
class Y extends X {
    constructor() {
        super(...arguments);
        this.y = 5;
    }
}
const instanceY = new Y;
console.log('visibilidade public: ', instanceY.x, instanceY.y);
/*********************************************************/
//==> VISIBILIDADE: PROTECTED
//---> pode ser acessado em subclasses por meio de um método
class B {
    constructor() {
        this.b = 22;
    }
    // método protected
    showMessage() {
        return console.log('Olá, boa noite!');
    }
}
class D extends B {
    showB() {
        return console.log(`B = ${this.b}`);
    }
    // método para acessar método protegido
    showShowMessage() {
        return this.showMessage();
    }
}
const instanceD = new D;
instanceD.showB();
instanceD.showShowMessage();
/*********************************************************/
//==> VISIBILIDADE: PRIVATE
//---> props e métodos só acessados na classe que os definiu
//---> precisam de métodos para serem acessados
class PrivateClass {
    constructor() {
        this.frase = 'Essa frase é privada!';
    }
    showFrase() {
        return console.log(this.frase);
    }
    privateMethod() {
        return console.log('Esse método é privado!');
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const instancePrivate = new PrivateClass;
// instancePrivate.frase;
instancePrivate.showFrase();
instancePrivate.showPrivateMethod();
/*********************************************************/
//==> STATIC MEMBERS- cria props e métodos estáticos
class StaticMembers {
    static staticMethod() {
        return console.log('Método static');
    }
}
StaticMembers.prop = 'Propriedade static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
/*********************************************************/
//==> GENERIC CLASS - cria classe com tipo genérico
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showItens() {
        return console.log(`First: ${this.first} / Second: ${this.second}`);
    }
}
const itemX = new Item('as45as4', 454454);
console.log(itemX);
itemX.showItens;
/*********************************************************/
//==> PARAMETERS PROPERTIES
//---> define a privacidade, nome e tipo das props. no constructor
class ProductProperties {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    get showPrice() {
        return `O preço é: R$${this.price}`;
    }
}
const newShirt = new ProductProperties('Camisa Polo', 29.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
/*********************************************************/
//==> CLASS EXPRESSIONS - cria classe anônima
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const newPeople = new myClass('João');
console.log(newPeople);
/*********************************************************/
//==> CLASSE ABSTRATA - serve como molde para outra classe
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        return console.log(`O nome é ${this.name}`);
    }
}
const newAbstractName = new AbstractExample('Ana Maria');
newAbstractName.showName();
/*********************************************************/
//==> RELAÇÃO ENTRE CLASSES
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
