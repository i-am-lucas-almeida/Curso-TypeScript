import { createContext } from "react";
import Context from "./components/Context";

//==> IMPORTAÇÃO DE COMPONENTE
import Destructuring, { Category } from "./components/Destructuring";
import { FirstComponent } from "./components/FirstComponent";
import SecondComponent from './components/SecondComponent';
import State from "./components/State";

// TYPES

type TextorNull = string | null;
type City = 'RJ' | 'SP';

//==> CONTEXT

interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  //==> CONTEXT

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }

  //==> VARIÁVEIS

  const name: string = 'Lucas';
  const age: number = 23;

  //==> VARIÁVEL COM TYPE

  const text: TextorNull = 'Esse é um exemplo de texto';

  const location: City = 'RJ';

  console.log(text, location);

  //==> FUNÇÕES

  function myWork(work: string): string {

    return `Meu emprego é: ${work}`;

  }

  return (

    <AppContext.Provider value={contextValue}>

      <div>

        <h2>Name: {name}</h2>
        <h2>Idade: {age}</h2>

        {myWork('desenvolvedor web')}

        <FirstComponent />

        <SecondComponent
          name='componente com props'
        />

        <Destructuring
          title="Post sobre TypeScript"
          commentQty={23}
          tags={['tecnologia', 'programação', 'educação']}
          categories={Category.TS}
        />

        <Destructuring
          title="Post sobre Python"
          commentQty={23}
          tags={['tecnologia', 'programação', 'educação']}
          categories={Category.P}
        />

        <State />

        <Context/>

      </div>

    </AppContext.Provider>

  );

}

export default App;