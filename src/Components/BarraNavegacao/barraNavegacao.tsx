import React from "react";
import style from "./barraNavegacao.module.scss";

function BarraNavegacao(){
    return(
        <div className={style.barraNavegacao}>
            
           <a href="#inicio"> <button className={style.btnHome}>Inicio</button></a>
            <a href="#sobre"><button className={style.btnSobre}>Sobre</button></a>
           <a href="#linguegens"> <button className={style.btnLing}>Linguagens</button></a>
            <a href="#projetos"><button className={style.btnProjtos}>Projetos</button></a>

        </div>
    )
}

export default BarraNavegacao;