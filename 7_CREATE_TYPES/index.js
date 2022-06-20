"use strict";
//==> GENERICS - aceita mais de um tipo
function showData(data) {
    return `O dado é: ${data}`;
}
console.log(showData(999999999));
console.log(showData('Ana Maria'));
/***********************************************************/
//==> CONSTRAINTS COM GENERICS - limita as generics
function showProduct(obj) {
    return `Produto: ${obj.name}`;
}
console.log(showProduct({ name: 'Porta', cor: 'Branca' }));
const carro = { name: 'Fusca', engine: 1.5, color: 'Preto' };
const caneta = { name: 'Caneta Bic', engine: false, color: 'Azul' };
console.log(carro);
console.log(caneta);
/***********************************************************/
//==> TYPE PARAMETERS - o parâmetro da função é a chave do objeto
function getSomeKey(obj, key) {
    return `O valor da chave é: ${obj[key]}`;
}
const server = {
    hd: '2 TB',
    ram: '32GB'
};
//--> passa o obj e a chave
console.log(getSomeKey(server, 'ram'));
function showUserName(obj, name) {
    return `A chave é ${obj[name]}`;
}
const character = { name: 'Lucas', age: 23, isDriverLicense: false };
console.log(showUserName(character, 'name'));
/***********************************************************/
//=> TYPEOF TYPE OPERATOR - cria uma variável com os mesmos tipos da outra
const userName = 'Lucas';
const userName_2 = 'Caio';
const userName_4 = 'Ana Maria';
const newTruck = {
    km: 5000,
    description: "Caminhão para pequenas cargas"
};
function showKms(km) {
    return `O veículo tem o km de ${km}`;
}
console.log(showKms(newTruck.km));
const newCar = {
    km: 12000
};
console.log(showKms(newCar.km));
const someValue = 5;
const testType = "some text";
const testType_3 = "Testando";
