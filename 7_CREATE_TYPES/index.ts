//==> GENERICS - aceita mais de um tipo

function showData<T>(data: T): string {

    return `O dado é: ${data}`;

}

console.log(showData(999999999));
console.log(showData('Ana Maria'));

/***********************************************************/

//==> CONSTRAINTS COM GENERICS - limita as generics

function showProduct<T extends { name: string }>(obj: T) {

    return `Produto: ${obj.name}`;

}

console.log(showProduct({ name: 'Porta', cor: 'Branca' }));

/***********************************************************/

//==> INTERFACE COM GENERICS

interface Details<U, T> {
    name: string
    engine: U
    color: T
}

type MyCar = Details<number, string>
type MyPen = Details<boolean, string>

const carro: MyCar = { name: 'Fusca', engine: 1.5, color: 'Preto' };
const caneta: MyPen = { name: 'Caneta Bic', engine: false, color: 'Azul' };

console.log(carro);
console.log(caneta);

/***********************************************************/

//==> TYPE PARAMETERS - o parâmetro da função é a chave do objeto

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {

    return `O valor da chave é: ${obj[key]}`;

}

const server = {
    hd: '2 TB',
    ram: '32GB'
}

//--> passa o obj e a chave
console.log(getSomeKey(server, 'ram'));
//console.log(getSomeKey(server, 'teste'));

/***********************************************************/

//=> KEYOF TYPE OPERATOR

type UserCharacter = {
    name: string,
    age: number,
    isDriverLicense: boolean
}

type C = keyof UserCharacter;

function showUserName(obj: UserCharacter, name: C) {

    return `A chave é ${obj[name]}`;

}

const character: UserCharacter = { name: 'Lucas', age: 23, isDriverLicense: false };

console.log(showUserName(character, 'name'));

/***********************************************************/

//=> TYPEOF TYPE OPERATOR - cria uma variável com os mesmos tipos da outra

const userName: string = 'Lucas';

const userName_2: typeof userName = 'Caio';

//const userName_3: typeof userName = 12;

type x = typeof userName;

const userName_4: x = 'Ana Maria';

/***********************************************************/

//=> INDEXED ACCESS TYPES - criar um tipo baseado em uma chave de objeto

type Truck = {km: number, description: string};

type Kms = Truck['km'];

const newTruck: Truck = {
    km: 5000,
    description: "Caminhão para pequenas cargas"
}

function showKms(km: Kms) {

    return `O veículo tem o km de ${km}`;

}

console.log(showKms(newTruck.km));

const newCar = {
    km: 12000
}

console.log(showKms(newCar.km));

/***********************************************************/

//==> CONDITIONAL TYPES - cria tipos com base em if ternário

interface A {}

interface B extends A {}

type newType = B extends A ? number : string;

const someValue: newType = 5;

//const someValue_2: newType = 'teste';

/***********************************************************/

//==> TEMPLATE LITERAL TYPES - cria tipos com template literal

type typeA = 'text';
type typeB = `some ${typeA}`;

const testType: typeB = "some text";
//const testType_2: typeB = "teste";

type a = 'Testando';
type b = 'Union';

type c = a | b;

const testType_3: c = "Testando";