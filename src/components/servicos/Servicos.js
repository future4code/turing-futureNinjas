import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class Servicos extends React.Component {

    state = {
        inputValorMaximo: "",
        inputValorMínimo: "",
        inputTitulo: "",
        inputDescricao: "",
        selectOrdenacao: ""
    }

    onChangeValorMaximo = (event) => {
        this.setState({inputValorMaximo: event.target.value})
    }

    onChangeValorMinimo = (event) => {
        this.setState({inputValorMínimo: event.target.value})
    }

    onChangeTitulo = (event) => {
        this.setState({inputTitulo: event.target.value})
    }

    onChangeDescricao = (event) => {
        this.setState({inputDescricao: event.target.value})
    }

    render () {

        console.log(this.state.inputTitulo)
        console.log(this.state.inputDescricao)
        console.log(this.state.inputValorMaximo)
        console.log(this.state.inputValorMínimo)

        return (
            <div>
                <label>Valor mínimo</label>
                <input 
                    onChange={this.onChangeValorMinimo}
                    value={this.state.inputValorMínimo}
                />
                <label>Valor máximo</label>
                <input 
                    onChange={this.onChangeValorMaximo}
                    value={this.state.inputValorMaximo}
                />
                <label>Título</label>
                <input 
                    onChange={this.onChangeTitulo}
                    value={this.state.inputTitulo}
                />
                <label>Descrição</label>
                <input 
                    onChange={this.onChangeDescricao}
                    value={this.state.inputDescricao}
                />
                <select> 
                    <option>Maior Preço</option>
                    <option>Menor Preço</option>
                    <option>Ordem alfábetica de A-Z</option>
                    <option>Ordem alfabética de Z-A</option>
                    <option>Maior Prazo</option>
                    <option>Menor Prazo</option>
                </select>
            </div>
        )
    }

}

export default Servicos