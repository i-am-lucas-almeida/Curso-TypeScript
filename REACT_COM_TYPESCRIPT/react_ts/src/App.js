"use strict";
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
exports.AppContext = void 0;
const react_1 = require("react");
const Context_1 = __importDefault(require("./components/Context"));
//==> IMPORTAÇÃO DE COMPONENTE
const Destructuring_1 = __importStar(require("./components/Destructuring"));
const FirstComponent_1 = require("./components/FirstComponent");
const SecondComponent_1 = __importDefault(require("./components/SecondComponent"));
const State_1 = __importDefault(require("./components/State"));
exports.AppContext = (0, react_1.createContext)(null);
function App() {
    //==> CONTEXT
    const contextValue = {
        language: 'JavaScript',
        framework: 'Express',
        projects: 5
    };
    //==> VARIÁVEIS
    const name = 'Lucas';
    const age = 23;
    //==> VARIÁVEL COM TYPE
    const text = 'Esse é um exemplo de texto';
    const location = 'RJ';
    console.log(text, location);
    //==> FUNÇÕES
    function myWork(work) {
        return `Meu emprego é: ${work}`;
    }
    return (<exports.AppContext.Provider value={contextValue}>

      <div>

        <h2>Name: {name}</h2>
        <h2>Idade: {age}</h2>

        {myWork('desenvolvedor web')}

        <FirstComponent_1.FirstComponent />

        <SecondComponent_1.default name='componente com props'/>

        <Destructuring_1.default title="Post sobre TypeScript" commentQty={23} tags={['tecnologia', 'programação', 'educação']} categories={Destructuring_1.Category.TS}/>

        <Destructuring_1.default title="Post sobre Python" commentQty={23} tags={['tecnologia', 'programação', 'educação']} categories={Destructuring_1.Category.P}/>

        <State_1.default />

        <Context_1.default />

      </div>

    </exports.AppContext.Provider>);
}
exports.default = App;
