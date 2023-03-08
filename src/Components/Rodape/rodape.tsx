import React from "react";
import { forEachTrailingCommentRange } from "typescript";
import style from "./rodape.module.scss";

function Rodape(){
    return(
        <footer className={style.rodape}>
            <h1>Feito por</h1>
            <h1>Tatiane C Padovani</h1>
        </footer>
    )
}

export default Rodape;