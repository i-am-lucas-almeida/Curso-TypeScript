"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SecondComponent = (props) => {
    return (<div>

            <h2>Meu segundo componente</h2>
            <p>O nome dele é: {props.name}</p>

        </div>);
};
exports.default = SecondComponent;
