"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const App_1 = require("../App");
const Context = () => {
    const details = (0, react_1.useContext)(App_1.AppContext);
    return (<div>

            <h1>Dados via Context:</h1>

            {details && (<>

                    <h2>{details.language}</h2>
                    <h2>{details.framework}</h2>
                    <h2>{details.projects}</h2>

                </>)}

        </div>);
};
exports.default = Context;
