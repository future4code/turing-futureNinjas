import React from 'react'
import styled from 'styled-components'

const ContainerCard = styled.div`
border: 1px solid black;
border-radius: 20px;
padding: 16px;
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

` 

class CardServico extends React.Component {

    render () {

        return(
        <ContainerCardServico>
            {this.props.lista.map((servico) => {
                return (
                    <ContainerCard key={servico.id}>
                        <H2Card>Título: {servico.title} </H2Card>
                        <H3Card>Descrição: {servico.description} </H3Card>
                        <p><strong>Valor: R$ {servico.value}</strong></p>
                        <p>Data de Vencimento: {servico.dueDate} </p>
                        <p>Pagamento: {servico.paymentMethods}</p>
                        <button>Canditar-me</button>
                    </ContainerCard>
                )
            })}
        </ContainerCardServico>
        )
    }
    
}

export default CardServico