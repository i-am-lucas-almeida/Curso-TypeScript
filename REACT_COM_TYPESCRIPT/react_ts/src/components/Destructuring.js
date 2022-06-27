"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var Category;
(function (Category) {
    Category["JS"] = "JavaScript";
    Category["TS"] = "TypeScript";
    Category["P"] = "Python";
})(Category = exports.Category || (exports.Category = {}));
function Destructuring({ title, commentQty, tags, categories }) {
    return (<div>

            <h2>Título: {title}</h2>

            <h3>Comentários: {commentQty}</h3>

            <ul>
                {tags && tags.map((i) => <li>{`#${i}`}</li>)}
            </ul>

            <h3>
                Categoria: {categories}
            </h3>

        </div>);
}
exports.default = Destructuring;
