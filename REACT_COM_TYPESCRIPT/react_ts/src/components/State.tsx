import { useState, ChangeEvent } from "react";

const State = () => {

    const [name, setName] = useState<string | null>(null);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {

        setName(e.target.value);

    }

    return (

        <div>

            <input
                type="text"
                placeholder="Digite seu nome: "
                onChange={handleChange}
            />

            <h1>{name}</h1>

        </div>

    );

}

export default State;