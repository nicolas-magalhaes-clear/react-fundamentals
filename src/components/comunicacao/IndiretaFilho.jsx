/*
Comunicação indireta entre dois componentes


na comunicação indireta passamos uma função como prop
e a usamos para passar os dados de um elemento filho para o pai
 */


import React from "react";


export default props =>{

    return(

        <div>

           <div>Filho</div>
           <button onClick={
            function(e){
                props.quandoClicar('João', 53, true)
            }
           }>Fornecer informações</button>

        </div>

    )
}