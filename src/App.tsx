import React from 'react';
import Apresentacao from './Components/Apresentacao/apresentacao';
import BarraNavegacao from './Components/BarraNavegacao/barraNavegacao';
import BotoesAuxiliares from './Components/BotoesAuxiliares/botoesAuxiliares';

import Habilidades from './Components/Habilidades/Habilidade';
import Linguagem from './Components/Linguagem/linguagem';
import Projetos from './Components/Projetos/projetos';
import RedesSociais from './Components/RedesSociais/redesSociais';
import Rodape from './Components/Rodape/rodape';
import Sobre from './Components/Sobre/sobre';
import style from "./estrutura.module.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <div className={style.componenteUm}>

          <div className={style.componenteDois}>
           <RedesSociais/>
           <BotoesAuxiliares/>
           </div>
           <Apresentacao/>
           
        </div>
        </header>

        
            <BarraNavegacao/>
            
            <Sobre/>
            <Linguagem/>
            <Projetos/>
     
      
    <Rodape/>

    </div>
  );
}

export default App;
