import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import style from "./habilidade.module.scss";
import Reacts, { MouseEvent } from 'react';


function Habilidades(){
    return(
        <div className={style.imagens}>
           <h2>Habilidades</h2>
           <div>
                <img id="html" src="../Images/logo_html.png" alt="logo html" />
                <img src="../Images/logo_css.png" alt=" logo css" />
                <img src="../Images/logo_js.png" alt=" logo js" />
                <img src="../Images/logo192.png" alt=" logo js" />
           </div>
        </div>
    )
}


{ 
    
}





export default Habilidades;