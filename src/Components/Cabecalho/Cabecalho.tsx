import React from "react";
import styles from './cabecalho.module.scss';




function Cabecalho(){
    return(
        
        <div className={styles.cabecalho}>
            



            <section>

                <img src="../Images/perfil.jpg" alt="Foto Perfil" />

                

                <div>
                    <p>
                        <h2>Olá! Me chamo Tatiane</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis leo ut ex semper congue. Maecenas dignissim vestibulum rutrum. Praesent lacinia rhoncus felis ac ultricies. Sed aliquam vestibulum fringilla. Etiam finibus enim massa, a blandit elit pellentesque non. Vivamus eu odio ut est pellentesque congue sit amet sed metus. Etiam id elementum quam, eget mollis velit
                    </p>
                
                </div>
                
            </section>

                <div className={styles.navegacao}>

                   

               </div>
        </div>
    )
}
export default Cabecalho;