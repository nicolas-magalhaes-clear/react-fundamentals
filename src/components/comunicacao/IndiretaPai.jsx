/*
Na comunicação direta um componente passa dados para o outro diretamente na declaração dele
*/
import React from "react";

import IndiretaFilho from "./IndiretaFilho";

export default props => {

    let nome = '?'
    let idade = 0;
    let nerd = false
    //Função de callback que utilizaremos para pegar dados do filho
    function fornecerInformacoes(nomeParam,idadeParam,nerdParam){
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
    }
    return(
        <div>

            <div>Pai</div>
            <div>nome:{nome}</div>
            <div>idade:{idade}</div>
            <div> {nerd ? 'Verdadeiro' : 'Falso'}</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>

        </div>
    )
}