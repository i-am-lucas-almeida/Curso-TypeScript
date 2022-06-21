import { useContext } from "react";

import { AppContext } from "../App";

const Context = () => {

    const details = useContext(AppContext);

    return (

        <div>

            <h1>Dados via Context:</h1>

            {details && (

                <>

                    <h2>{details.language}</h2>
                    <h2>{details.framework}</h2>
                    <h2>{details.projects}</h2>

                </>

            )}

        </div>

    );

}

export default Context;