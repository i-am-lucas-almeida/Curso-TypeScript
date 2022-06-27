"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const State = () => {
    const [name, setName] = (0, react_1.useState)(null);
    function handleChange(e) {
        setName(e.target.value);
    }
    return (<div>

            <input type="text" placeholder="Digite seu nome: " onChange={handleChange}/>

            <h1>{name}</h1>

        </div>);
};
exports.default = State;
