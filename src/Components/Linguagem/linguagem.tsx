import React from 'react';
import style from "./linguagem.module.scss";

function Linguagem(){
    return(
    <div className={style.linguagem}>
                <h1>Linguagens</h1>

        <section>
            <img src="../Images/logo_html.png" alt="Foto de perfil" />
            <img src="../Images/logo_css.png" alt="Foto de perfil" />
            <img src="../Images/logo_js.png" alt="Foto de perfil" />
            <img src="../Images/logo192.png" alt="Foto de perfil" />
            <img src="../Images/logo_typescript.png" alt="Foto de perfil" />
            <img src="../Images/logo_boot.png" alt="Foto de perfil" />
        </section>

    </div>
    )
}

export default Linguagem;