import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './styles.css'

export default class Dados_id extends Component {
    state = {
        dado: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/dados/${id}`)

        this.setState({ dado: response.data})
    }

    deleteData = async() => {
        if(window.confirm('Você deseja mesmo excluir o dado?')) {
            const { id } = this.props.match.params;
            const response = await api.delete(`/dados/${id}`);

            this.setState({dado: response.data});
            this.props.history.push('/dados');
        }
    }

    go = () => {
        const { id } = this.props.match.params;
        this.props.history.push(`/dados/alterar/${id}`);
    }

    render() {
        const {dado} = this.state;

        return (
            <div>
                <div className="links">
                <Link to="/dados" className="back-btn">  Voltar </Link>
                </div>

                <div className="dados-info">
                <h1>{dado.data}</h1>
                <p><strong>Id da estação: </strong>{dado.estacao_id}</p>
                <p><strong>Temperatura: </strong>{dado.temperatura}</p>
                <p><strong>Velocidade do vento: </strong>{dado.velocidade_vento}</p>
                <p><strong>Umidade: </strong>{dado.umidade}</p>

                <button className="button-a" onClick={this.go}> Editar</button>
                <button className="button-b" onClick={this.deleteData}> Excluir</button>
                </div>
            </div>
        )
    }
}