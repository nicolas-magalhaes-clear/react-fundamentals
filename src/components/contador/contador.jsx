import React from "react";
import './contador.css'

import Display from "./display";
import Botoes from "./botoes";
import PassoForm from "./passoForm";

export default class Contador extends React.Component{
    state = {
        numero: this.props.numeroInicial,
        passo: this.props.passo
    }

    inc = () =>{
        this.setState({
            numero: this.state.numero +  this.state.passo  + 1
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
               
            </div>
        )
    }
}