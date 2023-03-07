import React from "react";
import style from "./barraNavegacao.module.scss";

function BarraNavegacao(){
    return(
        <div className={style.barraNavegacao}>
            
            <button className={style.btnHome}>Inicio</button>
            <button className={style.btnSobre}>Sobre</button>
            <button className={style.btnLing}>Linguagens</button>
            <button className={style.btnProjtos}>Projetos</button>

        </div>
    )
}

export default BarraNavegacao;