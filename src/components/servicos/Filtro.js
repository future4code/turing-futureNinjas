import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CardServico from './CardServico'

class Filtro extends React.Component {

    state = {
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

    render () {

        return(
        <div>
            <CardServico 
                lista={this.state.listaDeServicos}
            />
        </div>
        )
    }

}

export default Filtro