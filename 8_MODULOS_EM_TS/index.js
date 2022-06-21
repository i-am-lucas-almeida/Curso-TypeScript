"use strict";
// importar e exportar códigos em ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//==> IMPORTAÇÃO DE ARQUIVOS
const greet_js_1 = __importDefault(require("./ts/greet.js"));
(0, greet_js_1.default)();
/***********************************************************/
//==> IMPORTAÇÃO DE VARIÁVEIS
const variables_js_1 = require("./ts/variables.js");
console.log(`Esse é o valor de x: ${variables_js_1.x}`);
/***********************************************************/
//==> MÚLTIPLAS IMPORTAÇÕES
const multipleImport_js_1 = require("./ts/multipleImport.js");
console.log(`A: ${multipleImport_js_1.A} / B: ${multipleImport_js_1.B}`);
(0, multipleImport_js_1.fruits)();
/***********************************************************/
//==> ALIAS PARA IMPORTAÇÃO - qnd se muda o nome do item importado
const changeName_js_1 = require("./ts/changeName.js");
console.log(`Import Alias: ${changeName_js_1.someName}`);
/***********************************************************/
//==> IMPORTAR TUDO
const Numbers = __importStar(require("./ts/importAll.js"));
console.log(Numbers);
console.log(Numbers.a);
console.log(Numbers.anyNumbers());
const newUser = {
    name: 'Lucas',
    age: 23
};
console.log(newUser);
const carro = {
    name: 'Ferrari',
    year: 2019
};
console.log(carro);
