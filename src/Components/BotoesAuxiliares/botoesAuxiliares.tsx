import React from "react";
import style from "./botoesAuxiliares.module.scss";


function BotoesAuxiliares(){
    return(
        <div className={style.divBotoesAux}>

             <div>
                <button className={style.btnNoturno}>☾</button>
                <button className={style.btnBug}>⚠</button>
             </div>

             <div className={style.cv}>
               <a href="TCP_CV.pdf" target="_blank"></a> <button>Baixar CV</button>
             </div>

        </div>
    )
}

export default BotoesAuxiliares;