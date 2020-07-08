import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class CardServico extends React.Component {

    render () {

        console.log(this.props.lista)

        return(
        <div>
            {this.props.lista.map((servico) => {
                return (
                    <div key={servico.id}>Título: {servico.title} Descrição: {servico.description} Valor: {servico.value} Data de Vencimento: {servico.dueDate} Pagamento: {servico.paymentMethods}</div>
                )
            })}
        </div>
        )
    }
    
}

export default CardServico