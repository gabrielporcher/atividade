import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import './styles.css';

export default class Estacoes extends Component {
    state = {
        estacoes: [],
    }

    componentDidMount() {
        this.loadStations();
    }

    loadStations = async () => {
        const response = await api.get('/estacoes');

        this.setState({estacoes: response.data})
    }

    render() {
    return (
        <div className="stations-list">
            <div className="actions">
                <Link to="/" className="back-btn">Voltar</Link>
            </div>

            <h1>Estações: </h1>

            <div className="actions">
                <Link to="/add/estacao" className="add-btn">Adicionar estação</Link>
            </div>

            {this.state.estacoes.map(estacao => (
                <article key={estacao.id}>
                    <h2>{estacao.serial}</h2>
                    <p><strong>Latitude: </strong>{estacao.lat}</p>
                    <p><strong>Longitude: </strong>{estacao.lon}</p>
                    <p>{estacao.nome}</p>

                    <Link to={`/estacoes/${estacao.id}`}>Acessar</Link>
                </article>
            ))}
        </div>
    )
    }
}