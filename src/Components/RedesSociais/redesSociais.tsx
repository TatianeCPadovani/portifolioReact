import React from "react";
import style from "./redesSociais.module.scss";

function RedesSociais(){
    return(
        <div className={style.divRedesSociais}>
            <h1>Tatiane Padovani</h1>

            <div>
                <img src="./Images/linkedn.png" alt="Linkedn Logo" />
                <img src="./Images/instagram.png" alt="Instagram Logo" />
                <img src="./Images/github.png" alt="GitHub Logo" />
                <img src="./Images/whatsapp.png" alt="GitHub Logo" />
                <img src="./Images/facebook.png" alt="GitHub Logo" />
            </div>

        </div>
    )
}

export default RedesSociais;