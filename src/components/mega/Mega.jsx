import React, { useState } from "react"

export default props => {

    const [numeroSorteio, setNumeroSorteio] = useState();
    const [qtdeSelecionada, setQtdeSelecionada] = useState(0);

    function att(event){
        setQtdeSelecionada(event.target.value)
    }

    function sortear(qtde) {
        let numString =  []
        for(let i =0; i < qtde; i++){
            
            numString.push(Math.floor(Math.random() * 100))

        }
        
        let stringNum = ""
        numString.forEach(num=>{
            stringNum = stringNum + num.toString() + " "
        })

        console.log('numstring:', numString)
        console.log('stringnum:', stringNum)
        setNumeroSorteio(stringNum);
        

    }
    
    return (
        <div>

            <div className="header-Mega">
                <h2>Números sorteados:{numeroSorteio}</h2>
            </div>
            <div>
                <label htmlFor="qtdeNumeros">Quantidade de números sorteados</label>
                <input onChange={att} id='qtdeNumeros' type="number" placeholder="Quantidade de numeros a sortear" />
            </div>
            <button onClick={()=>sortear(qtdeSelecionada)}>Sortear número</button>
        </div>
    )
}