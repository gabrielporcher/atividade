import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import './styles.css'

export default class Dados extends Component {
    state = {
        dados: []
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const response = await api.get('/dados');
        
        this.setState({dados: response.data})
    }

    render() {
        return (
            <div className="data-list">
            <div className="actions">
                <Link to="/" className="back-btn">Voltar</Link>
            </div>

            <h1>Dados: </h1>

            <div className="actions">
                <Link to="/add/dado" className="add-btn">Adicionar dado</Link>
            </div>

            {this.state.dados.map(dados => (
                <article key={dados.id}>
                    <h2>{dados.data}</h2>
                    <p><strong>Id da estação: </strong>{dados.estacao_id}</p>
                    <p><strong>Temperatura: </strong>{dados.temperatura}</p>
                    <p><strong>Velocidade do vento: </strong>{dados.velocidade_vento}</p>
                    <p><strong>Umidade: </strong>{dados.umidade}</p>

                    <Link to={`/dados/${dados.id}`}>Acessar</Link>
                </article>
            ))}
        </div>
        )
    }
}