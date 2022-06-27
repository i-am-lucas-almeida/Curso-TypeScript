//==> CAMPOS EM CLASSES

//---> campos sem valores definidos:

class User {

    name!: string
    age!: number

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

    name
    age

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;

    }

}

const pessoa = new NewUser('Ana Maria', 25);

console.log(pessoa);

/*********************************************************/

//==> PROPRIEDADES READONLY - inicia com valor e torna imutável

class Car {

    //--> recebe tipo por inference
    name
    readonly rodas = 4;

    constructor(name: string) {

        this.name = name;

    }

}

const corola = new Car('Corola');

console.log(corola);

/*********************************************************/

//==> HERANÇA E SUPER

class CarCharacters extends Car {

    color

    constructor(name: string, color: string) {

        super(name);
        this.color = color;

    }

}

const Ferrari = new CarCharacters('Ferrari Modelo 2.8', 'vermelha');

console.log(Ferrari);

/*********************************************************/

//==> MÉTODOS EM CLASSES

class Product {

    name
    price

    constructor(name: string, price: number) {

        this.name = name;
        this.price = price;

    }

    discount(n: number): string {

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

    name
    model

    constructor(name: string, model: number) {

        this.name = name;
        this.model = model;

    }

    showDetails(): string {

        return `Caminhão de nome ${this.name} e modelo ${this.model}`;

    }

}

const moto = new Moto('Moto Honda', 254689);

console.log(moto);

/*********************************************************/

//==> GETTERS - método para ler e retornar propriedades dos objetos

class Person {

    name
    surname

    constructor(name: string, surname: string) {

        this.name = name;
        this.surname = surname;

    }

    get fullName(): string {

        return `O nome completo é ${this.name} ${this.surname}`;

    }

}

const ana = new Person('Ana', 'Maria da Silva');

console.log(ana);

console.log(ana.fullName);

/*********************************************************/

//==> SETTER - método para modificar/atribuir valores

class Coords {

    x!: number
    y!: number

    set fillX(x: number) {

        if (x === 0) {

            return

        }

        this.x = x;

        console.log('O valor de (x) foi salvo!');

    }

    set fillY(y: number) {

        if (y === 0) {

            return

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

/*********************************************************/

//==> HERANÇA DE INTERFACES

interface PostTitle {
    titleBlog(): string
}

class postBlog implements PostTitle {

    title

    constructor(title: string) {

        this.title = title;

    }

    titleBlog(): string {

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
    someMethod(): void {
        return console.log('Método 2');
    }

}

const base = new NewBase;

base.someMethod();

/*********************************************************/

//==> VISIBILIDADE: PUBLIC - modo default
//---> qualquer método ou prop. da classe pai, acessível na classe filha

class X {

    x = 10

}

const instanceX = new X;
console.log('visibilidade public: ', instanceX.x);

class Y extends X {

    public y = 5

}

const instanceY = new Y;
console.log('visibilidade public: ', instanceY.x, instanceY.y);

/*********************************************************/

//==> VISIBILIDADE: PROTECTED
//---> pode ser acessado em subclasses por meio de um método

class B {

    protected b = 22;

    // método protected
    protected showMessage() {

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

    private frase = 'Essa frase é privada!';

    showFrase() {

        return console.log(this.frase);

    }

    private privateMethod() {

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

    static prop = 'Propriedade static';

    static staticMethod() {

        return console.log('Método static');

    }

}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();


/*********************************************************/

//==> GENERIC CLASS - cria classe com tipo genérico

class Item<T, U>{

    first
    second

    constructor(first: T, second: U) {

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

    constructor(public name: string, private price: number) {

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

const myClass = class <T>{

    name

    constructor(name: T) {

        this.name = name;

    }

}

const newPeople = new myClass('João');

console.log(newPeople);

/*********************************************************/

//==> CLASSE ABSTRATA - serve como molde para outra classe

abstract class AbstractClass {

    abstract showName(): void;

}

class AbstractExample extends AbstractClass {

    name

    constructor(name: string) {

        super();
        this.name = name;

    }

    showName(): void {
        return console.log(`O nome é ${this.name}`);
    }

}

const newAbstractName = new AbstractExample('Ana Maria');

newAbstractName.showName();

/*********************************************************/

//==> RELAÇÃO ENTRE CLASSES

class Dog {
    name!: string;
}

class Cat {
    name!: string;
}

const doguinho = new Cat();

console.log(doguinho);