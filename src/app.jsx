import React from "react";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import './app.css'
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/input";
import Contador from "./components/contador/contador";
import Mega from "./components/mega/Mega";

export default function App() {
    return (
        <div id="app">

            <div className="cards" >

                <Card titulo='#013 - Desafio Megasena'>
                    <Mega/>
                </Card>

                <Card titulo='12 - Contador' color='yellow'>
                    <Contador numeroInicial={0} passo={0}></Contador>
                </Card>
                <Card titulo='#11 - Componentes controlados' color='green'>
                    <Input></Input>
                </Card>

                <Card titulo='#10 - Comunicação indireta'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo='#09 - Comunicação direta'>
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo='#08 - Renderização condicional' color="#982395">
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo usuario={{ nome: 'Julia' }} />
                    <UsuarioInfo usuario={{ email: 'Fernando' }} />
                    <UsuarioInfo usuario={{}} />
                    <UsuarioInfo usuario={{}} />
                    <UsuarioInfo usuario={{}} />
                    <UsuarioInfo usuario={{ nome: 'Lucas' }} />
                    <UsuarioInfo usuario={{ nome: 'Natalia' }} />
                </Card>

                <Card titulo='#07 #DESAFIO01 - Desafio Produtos repetição' color='yellow' border='yellow'>
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo='#06 - Exercicio lista de alunos'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#05 - Componentes com filhos' color="#A1B200" border="#A1B200">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome='Ana'></FamiliaMembro>
                        <FamiliaMembro nome='Pedro'></FamiliaMembro>
                        <FamiliaMembro nome='Lucas'></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo='#04 Desafio Aleatorio' color="#A1B200" border="#A1B200">
                    <Aleatorio min={1} max={30}></Aleatorio>
                </Card>

                <Card titulo='#03 Fragmento' color="#3498DB" border='#3498DB'>
                    <Fragmento />
                </Card>/
                1

                <Card titulo='#2 ComParametro' color='#F1C40F' border='#F1C40F'>
                    <ComParametro
                        titulo="Novo titulo"
                        aluno='Lucas'
                        nota={9.2}
                    ></ComParametro>
                </Card>
                <Card titulo='#01 Primeiro' >
                    <Primeiro></Primeiro>
                </Card>

            </div>


        </div>
    )
}

