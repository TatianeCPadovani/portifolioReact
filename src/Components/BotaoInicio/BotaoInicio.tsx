import React from "react";
import styles from "./botaoInicio.module.scss";


class BotaoInicio extends React.Component<{texto: string}>{

    render(){
        return(
        <button className={styles.botao}>
            {this.props.texto}
        </button>
        )
        
    }
} 



export default BotaoInicio;