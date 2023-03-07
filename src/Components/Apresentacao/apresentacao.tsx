import React from "react";
import style from "./apresentacao.module.scss";

function Apresentacao(){
    return(
        <div className={style.foto}>
            <img src="../Images/perfil02.jpg" alt="Foto de perfil" />
            <h4>Estudante de desenvolvimento frontend</h4>
        </div>
    )
}

export default Apresentacao;