"use strict";
const data = [
    { name: "Matheus", age: 31, salary: 2000, driverLicense: true },
    { name: "João", age: 18, salary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, salary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, salary: 7200, driverLicense: true },
    { name: "Érica", age: 16, salary: 0, driverLicense: false },
];
//=> REVERSE - reordena o array
const reverseArray = data.reverse();
console.log(reverseArray);
//=> PUSH
const newUser = {
    name: 'Lucas',
    age: 23,
    salary: 0,
    driverLicense: false
};
data.push(newUser);
console.log(data);
//==> FIND - encontra dentro do array
const hightSalary = 3000;
const findSalary = data.find((user) => user.salary > hightSalary);
console.log(findSalary);
//==> FIND INDEX - acha pelo index
const lowerSalary = data.findIndex((user) => user.salary > 0 && user.salary <= 2000);
console.log(lowerSalary, data[lowerSalary]);
data[lowerSalary].salary += 500;
console.log(data[lowerSalary]);
//==> INCLUDES
const numbersA = [1, 2, 3, 4, 5];
console.log(numbersA.includes(6));
console.log(numbersA.includes(2));
//==> FOREACH
const lista = document.getElementById('lista');
data.forEach((i) => {
    const el = document.createElement('li');
    el.textContent = `
        Nome: ${i.name} /
        Idade: ${i.age} /
        Salário: R$${i.salary} /
        Pode dirigir: ${i.driverLicense === true ? '✅' : '❌'}
    `;
    lista?.appendChild(el);
});
data.map((user) => user.newsLetter = false);
console.log(data);
//==> FILTER
const driver = data.filter((user) => user.driverLicense);
const hightAge = data.filter((user) => user.age > 30);
console.log(driver);
console.log(hightAge);
//==> REDUCE
const totalSalary = data.reduce((total, user) => total += user.salary, 0);
console.log('Salário total: R$' + totalSalary);
//==> SOME - se ao menos um tem o dado
data[3].newsLetter = true;
const someNewsLetter = data.some((user) => user.newsLetter);
console.log(someNewsLetter);
//==> EVERY - se todos  tem o dado
const everyName = data.every((user) => user.name);
console.log(everyName);
const everySalary = data.every((user) => user.salary > 0);
console.log(everySalary);
