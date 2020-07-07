import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class CriacaoDeServicos extends React.Component {

    state = {
        inputTitulo: "",
        inputDescricao: "",
        inputValorDaRemuneracao: "",
        inputPrazo: ""
    }

    onChangeInputTitulo = (event) => {
        this.setState({inputTitulo: event.target.value})
    }

    onChangeInputDescricao = (event) => {
        this.setState({inputDescricao: event.target.value})
    }

    onChangeInputValorDaRemuneracao = (event) => {
        this.setState({inputValorDaRemuneracao: event.target.value})
    }

    onChangeInputPrazo = (event) => {
        this.setState({inputPrazo: event.target.value})
    }

    render () {

        return (
            <div>
                <label>Título</label>
                <input 
                    onChange={this.onChangeInputTitulo}
                    value={this.state.inputTitulo}
                />
                <label>Descrição</label>
                <input 
                    onChange={this.onChangeInputDescricao}
                    value={this.state.inputDescricao}
                />
                <label>Valor da Remuneração</label>
                <input 
                    onChange={this.onChangeInputValorDaRemuneracao}
                    value={this.state.inputValorDaRemuneracao}
                />
                <label>Prazo</label>
                <input 
                    onChange={this.onChangeInputPrazo}
                    value={this.state.inputPrazo}
                />
                <form>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> Transferência Bancaria         
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" /> Débito
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /> Crédito
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /> Dinheiro
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" /> Boleto
                </form>
                <button onClick={this.props.voltar}>Voltar</button>
            </div>
        )
    }
}

export default CriacaoDeServicos