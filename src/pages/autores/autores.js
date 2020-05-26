import React, { Fragment, Component } from 'react';
import Header from '../../components/header/header';
import Tabela from '../../components/tabela/tabela';
import APIService from '../../utils/apiService';
import PopUp from '../../utils/popup';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
        }
    }

    componentDidMount() {
        APIService.listaNomes()
                    .then(res => {
                        if(res.message === 'success') {
                            this.setState({ nomes: [...this.state.nomes, ...res.data]});
                        }
                    })
                    .catch(err => PopUp.exibeMensagem('error', `Erro na comunicação com a API.`));
    }

    render() {
        const campos = [{ titulo: 'Autores', dado: 'nome' }]
        return(
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Autores</h1>
                    <Tabela
                        dados={this.state.nomes}
                        campos={campos}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Autores;