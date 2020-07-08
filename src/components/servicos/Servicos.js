import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardServico from './CardServico'

class Servicos extends React.Component {

    state = {
        inputValorMaximo: "",
        inputValorMínimo: "",
        inputTitulo: "",
        inputDescricao: "",
        selectOrdenacao: "",
        listaDeServicos: [],
    }

    componentDidMount = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs',)
        .then((response) => {
            this.setState({listaDeServicos: response.data.jobs})
        }).catch((error) => {
            console.log(error.message)
        })
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

    onChangeSelect = (event) => {
        this.setState({selectOrdenacao: event.target.value})
    }

    render () {

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
                <select onChange={this.onChangeSelect} value={this.state.selectOrdenacao}> 
                    <option value="">Selecione</option>
                    <option value="MaiorPreco">Maior Preço</option>
                    <option value="MenorPreco">Menor Preço</option>
                    <option value="OrdemAZ">Ordem alfábetica de A-Z</option>
                    <option value="OrdemZA">Ordem alfabética de Z-A</option>
                    <option value="MaiorPrazo">Maior Prazo</option>
                    <option value="MenorPrazo">Menor Prazo</option>
                </select>
                <button>Filtrar</button>
                <div>
                    <CardServico 
                        lista={this.state.listaDeServicos}
                    />
                </div>
                <button onClick={this.props.voltar}>Voltar</button>
            </div>
        )
    }

}

export default Servicos