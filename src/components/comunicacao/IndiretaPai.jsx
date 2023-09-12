/*
Na comunicação direta um componente passa dados para o outro diretamente na declaração dele
*/
import React, { useState, useTransition } from "react";

import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [a,b] = [1,2]
    let [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd,setNerd] = useState(false);
    //Função de callback que utilizaremos para pegar dados do filho
    function fornecerInformacoes(nome,idade,nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd)
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