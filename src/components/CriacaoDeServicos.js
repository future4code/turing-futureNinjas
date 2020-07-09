import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCheckBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
`
const FormCheckBox = styled.form`
    border: 1px solid black;
    width: 15vw;
    border-radius: 5px;
    margin: 10px auto;
`
const ContainerInputs = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25vw;
    margin: 8px auto;
`
const ContainerButtons = styled.div`
    width: 10vw;
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
`
class CriacaoDeServicos extends React.Component {

    state = {
        inputTitulo: "",
        inputDescricao: "",
        inputValorDaRemuneracao: "",
        inputPrazo: "",
        metodosPag: []
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

    onChangeChecked = (event) => {
       let metodosPag = [...this.state.metodosPag, event.target.id]
        if(this.state.metodosPag.includes(event.target.id)){
            metodosPag = metodosPag.filter(metodo => metodo !== event.target.id)
        }
        this.setState({
            metodosPag: metodosPag
        })
        
    }

    cadastroServico = () => {
        const body = {
            "title": this.state.inputTitulo,
            "description": this.state.inputDescricao,
            "value": this.state.inputValorDaRemuneracao,
            "paymentMethods": this.state.metodosPag,
            "dueDate": this.state.inputPrazo
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs', body).then(
            alert("Serviço cadastrado com sucesso!")
        ).catch(err => {
            console.log(err)
        })
    }

    render () {
        console.log(this.state.metodosPag)
        return (
            <div>
                <ContainerInputs>
                    <label>Título</label>
                    <input 
                        onChange={this.onChangeInputTitulo}
                        value={this.state.inputTitulo}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <label>Descrição</label>
                    <input 
                        onChange={this.onChangeInputDescricao}
                        value={this.state.inputDescricao}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <label>Valor da Remuneração</label>
                    <input 
                        onChange={this.onChangeInputValorDaRemuneracao}
                        value={this.state.inputValorDaRemuneracao}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <label>Prazo</label>
                    <input 
                        onChange={this.onChangeInputPrazo}
                        value={this.state.inputPrazo}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <label>Formas de Pagamento</label>
                    <FormCheckBox>
                        <ContainerCheckBox>
                            <label>Transferência Bancaria </label>
                            <input type="checkbox" id="Transferência Bancária" value="Transferência Bancária" onChange={this.onChangeChecked}/> 
                        </ContainerCheckBox>
                        <ContainerCheckBox>
                            <label>Cartão de débito </label>       
                            <input type="checkbox" id="Cartão de débito" value="Cartão de débito" onChange={this.onChangeChecked}/>
                        </ContainerCheckBox>
                        <ContainerCheckBox>
                            <label>Cartão de crédito </label>   
                            <input type="checkbox" id="Cartão de crédito" value="Cartão de crédito" onChange={this.onChangeChecked}/>
                        </ContainerCheckBox>
                        <ContainerCheckBox>
                            <label>Dinheiro </label> 
                            <input type="checkbox" id="Dinheiro" value="Dinheiro" onChange={this.onChangeChecked}/>
                        </ContainerCheckBox>
                        <ContainerCheckBox>
                            <label>Boleto</label> 
                            <input type="checkbox" id="Boleto" value="Boleto" onChange={this.onChangeChecked}/> 
                        </ContainerCheckBox>
                    </FormCheckBox>
                </ContainerInputs>
                <ContainerButtons>
                    <button onClick={this.cadastroServico}>Cadastrar</button>
                    <button onClick={this.props.voltar}>Voltar</button>
                </ContainerButtons>
            </div>
        )
    }
}

export default CriacaoDeServicos