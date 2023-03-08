import React from "react";
import style from "./sobre.module.scss";

function Sobre(){
    return(

        <div  id="sobre" className={style.divBlocos}>
            <h1>Sobre</h1>

         
                <div className={style.sobre}>
                    <div>
                        <img src="../Images/backgroundProgramacao.jpg" alt="" />
                    </div>

                    <section>
                        <p>Programação</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in metus non enim ornare eleifend. Praesent varius justo vel eros lobortis faucibus. Curabitur dictum ipsum sit amet turpis lacinia accumsan. Integer laoreet augue at dolor ornare gravida. Suspendisse nec libero viverra, tristique mauris sit amet, eleifend eros. Donec efficitur tincidunt rhoncus. Fusce suscipit ultrices eleifend. Donec gravida felis eget quam semper sagittis.</p>
                    </section>
                </div>





                <div className={style.sobre}>
                   

                    <section>
                        <p>Hobbies e sonhos</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in metus non enim ornare eleifend. Praesent varius justo vel eros lobortis faucibus. Curabitur dictum ipsum sit amet turpis lacinia accumsan. Integer laoreet augue at dolor ornare gravida. Suspendisse nec libero viverra, tristique mauris sit amet, eleifend eros. Donec efficitur tincidunt rhoncus. Fusce suscipit ultrices eleifend. Donec gravida felis eget quam semper sagittis.</p>
                    </section>


                    <div>
                        <img src="../Images/backgroundHobbie.jpg" alt="" />
                    </div>


                </div>
          



        </div> 
    )
}

export default Sobre;