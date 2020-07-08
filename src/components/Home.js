import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class Home extends React.Component {

    state = {
        
    }

    render () {


        return (
            <div>
                <div>
                    <h2>O jeito mais esperto de	contratar um serviço</h2>
                    <h4>Fale o que precisa, receba até 4 orçamentos, escolha o melhor.</h4>
                    <button onClick={this.props.abrirCriacaoDeServicos}>QUERO UM PROFISSIONAL AGORA</button>
                </div>
                <div>
                    <h2>Você é profissional?</h2>
                    <button onClick={this.props.abrirServico}>Cadastrar meus serviços</button>
                </div>
            </div>
        )
    }
}

export default Home