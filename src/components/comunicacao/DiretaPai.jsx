/*
Na comunicação direta um componente passa dados para o outro diretamente na declaração dele
*/
import React from "react";

import DiretaFilho from "./DiretaFilho";

export default props => {

    return(
        <div>

<DiretaFilho nome="Lucas" idade={20} nerd={true}></DiretaFilho>
<DiretaFilho nome="GUilherme" idade={21} nerd={false}></DiretaFilho>
        </div>
    )
}