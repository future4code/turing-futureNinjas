import React, { Component } from 'react'
import Servicos from './servicos/Servicos'
import Home from './Home'
import CriacaoDeServicos from './CriacaoDeServicos'
import Header from './Header'
import Footer from './Footer'

export class AppContainer extends Component {

  state = {

  }

  render() {

    return (
      <div>
          <Header />
          <Home />
          <Servicos />
          <CriacaoDeServicos />
          <Footer />
      </div>
    )

  }
}
