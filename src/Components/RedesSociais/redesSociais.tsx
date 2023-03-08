import React from "react";
import style from "./redesSociais.module.scss";

function RedesSociais(){
    return(
        <div id="inicio" className={style.divRedesSociais}>
            <h1>Tatiane Padovani</h1>

            <div>
               <a href="https://www.linkedin.com/in/tatiane-castelo-padovani-78a602141/" target="_blank"><img src="./Images/linkedn.png" alt="Linkedn Logo" /></a> 
               <a href="https://www.instagram.com/tatianecastelopadovani/" target="_blank"> <img src="./Images/instagram.png" alt="Instagram Logo" /></a>
              <a href="https://github.com/TatianeCPadovani" target="_blank">  <img src="./Images/github.png" alt="GitHub Logo" /></a>
            <a href="https://wa.me/5511972403012" target="_blank"><img src="./Images/whatsapp.png" alt="GitHub Logo" /></a>
                
            </div>

        </div>
    )
}

export default RedesSociais;