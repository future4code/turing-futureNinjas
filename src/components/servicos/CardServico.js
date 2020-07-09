import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCard = styled.div`
border: 1px solid black;
border-radius: 20px;
padding: 16px;
width: 90%;
margin: 0 auto;
`

const H2Card = styled.h2`
margin: 12px 0;
padding: 0;
`

const H3Card = styled.h3`
margin: 0;
padding: 0;
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
                                       <H2Card>Título: {servico.title} </H2Card>
                                       <H3Card>Descrição: {servico.description} </H3Card>
                                       <p><strong>Valor: R$ {servico.value}</strong></p>
                                       <p>Data de Vencimento: {servico.dueDate} </p>
                                       <p>Pagamento: {servico.paymentMethods.map((metodo) => {
                                           return (`${metodo}; `)
                                       })}</p>
                                       <button onClick={() => this.onClickDescandidatar(servico.id)}> {renderizaBotao} </button>
                                   </ContainerCard>
                               )
                           } else {
                               return (
                                   <ContainerCard key={servico.id}>
                                       <H2Card>Título: {servico.title} </H2Card>
                                       <H3Card>Descrição: {servico.description} </H3Card>
                                       <p><strong>Valor: R$ {servico.value}</strong></p>
                                       <p>Data de Vencimento: {servico.dueDate} </p>
                                       <p>Pagamento: {servico.paymentMethods.map((metodo) => {
                                           return (`${metodo}; `)
                                       })}</p>
                                       <button onClick={() => this.onClickCandidatar(servico.id)}> {renderizaBotao} </button>
                                   </ContainerCard>
                               )
                           } 
                       })}
       
                   </ContainerCardServico>
               )

    }
    
}

export default CardServico