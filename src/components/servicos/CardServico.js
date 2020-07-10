import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
//import {ButtonCriacao} from '../CriacaoDeServicos'

const ContainerCard = styled.div`
border: 1px solid #b2aeae;
padding: 16px;
width: 90%;
height: 50vh;
margin: 0 auto;
display: grid;
grid-row: repeat(7, 1fr);
`

const H2Card = styled.h2`
margin: 0;
padding: 0;
`

const H3Card = styled.h3`
margin: 0;
padding: 0;
font-size: 16px;
font-weight: 600;
`

const ButtonCr = styled.button`
    margin: 0 auto;
    grid-row: 7/8;
    height: 40px;
    width: 200px;
    background-color:  ${props => props.cor};
    color: ${props => props.texto};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    outline:none;
    :hover{
        background-color: ${props => props.hover};
        color: ${props => props.txt};
        /*color: #474117;*/
    }
    
`
const ContainerCardServico = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    padding:8px;
    width: 100%;
    margin: 16px 0;
` 

class CardServico extends React.Component {

    state = {
        teste: false,
        nomeBotao: ""
    }

    componentDidMount = () => {
        this.props.atualiza()
    }

    onClickCandidatar = (Identificador) => {
        console.log(this.state.teste)
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs/${Identificador}/take`,)
        .then((response) => {
            alert("Você se candidatou na vaga")
            this.componentDidMount()
        })
        .catch((error) => {
            console.log(error.message)
        })
        this.setState({teste: !this.state.teste})
        console.log(this.state.teste)
    }

    onClickDescandidatar = (Identificador) => {
        console.log(this.state.teste)
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs/${Identificador}/giveup`,)
        .then((response) => {
            alert("Voce se descandidatou desta vaga")
            this.componentDidMount()
        })
        .catch((error) => {
            console.log(error.message)
        })
        this.setState({teste: !this.state.teste})
        console.log(this.state.teste)
    }

    render () {


            return(
                    <ContainerCardServico>
       
                       {this.props.lista.map((servico) => {
       
                           const renderizaBotao = servico.taken === true ? "Descandidatar-me" : "Candidatar-me"
       
                           if (servico.taken) {
                               return (
                                   <ContainerCard key={servico.id}>
                                       <H2Card>{servico.title} </H2Card>
                                       <H3Card>Descrição: {servico.description} </H3Card>
                                       <p><strong>Valor: R$ {servico.value}</strong></p>
                                       <p>Data de Vencimento: {servico.dueDate} </p>
                                       <p>Pagamento: {servico.paymentMethods.map((metodo) => {
                                           return (`${metodo}; `)
                                       })}</p>
                                       <ButtonCr cor={"#FFEA52"} hover={"black"} txt={"white"} texto={"black"} onClick={() => this.onClickDescandidatar(servico.id)}> {renderizaBotao} </ButtonCr>
                                   </ContainerCard>
                               )
                           } else {
                               return (
                                   <ContainerCard key={servico.id}>
                                       <H2Card>{servico.title} </H2Card>
                                       <H3Card>Descrição: {servico.description} </H3Card>
                                       <p><strong>Valor: R$ {servico.value}</strong></p>
                                       <p>Data de Vencimento: {servico.dueDate} </p>
                                       <p>Pagamento: {servico.paymentMethods.map((metodo) => {
                                           return (`${metodo}; `)
                                       })}</p>
                                       <ButtonCr cor={"black"} hover={"#FFEA52"} txt={"black"} texto={"white"} onClick={() => this.onClickCandidatar(servico.id)}> {renderizaBotao} </ButtonCr>
                                   </ContainerCard>
                               )
                           } 
                       })}
       
                   </ContainerCardServico>
               )

    }
    
}

export default CardServico