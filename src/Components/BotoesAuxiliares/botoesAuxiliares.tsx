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
                <button>Baixar CV</button>
             </div>

        </div>
    )
}

export default BotoesAuxiliares;