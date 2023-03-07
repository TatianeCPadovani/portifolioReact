import React from 'react';
import Apresentacao from './Components/Apresentacao/apresentacao';
import BarraNavegacao from './Components/BarraNavegacao/barraNavegacao';
import BotoesAuxiliares from './Components/BotoesAuxiliares/botoesAuxiliares';

import Habilidades from './Components/Habilidades/Habilidade';
import Linguagem from './Components/Linguagem/linguagem';
import RedesSociais from './Components/RedesSociais/redesSociais';
import Sobre from './Components/Sobre/sobre';
import style from "./estrutura.module.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className={style.componenteUm}>
           <RedesSociais/>
           <BotoesAuxiliares/>
        </div>

            <BarraNavegacao/>
            <Apresentacao/>
            <Sobre/>
            <Linguagem/>
      </header>
      
    

    </div>
  );
}

export default App;
