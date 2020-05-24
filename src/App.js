import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './header';
import Tabela from './tabela';
import Formulario from './formulario';
import Styled from './styled';
import PopUp from './popup';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  };

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posicaoAtual) => {
        return posicaoAtual !== index;
      }) 
    });

    PopUp.exibeMensagem('error', 'Autor removido com sucesso');
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem('success', 'Autor adicionado com sucesso.');
  }

  render() {
    return (
      <Fragment>
        <Header />
        
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Tabela autores={ this.state.autores } removeAutor={ this.removeAutor } />
          <Formulario escutadorDeSubmit={ this.escutadorDeSubmit } />
        </div>

        <Styled />
       </Fragment>
    );
  }
};

export default App;
