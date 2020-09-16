import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './styles.css'

export default class Estacoes_id extends Component {
    state = {
        estacao: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/estacoes/${id}`)

        this.setState({ estacao: response.data})
    }

    deleteStation = async () => {
        if(window.confirm('Você deseja mesmo excluir a estação?')){
            const { id } = this.props.match.params;
            const response = await api.delete(`/estacoes/${id}`);

            this.setState({estacao: response.data});
            this.props.history.push('/estacoes');
        }
    }

    render() {
        const {estacao} = this.state;

        return(
            <div>
                <div className="links">
                <Link to="/estacoes" className="back-btn">  Voltar </Link>
                </div>

                <div className="estacoes-info">
                <h1>{estacao.serial}</h1>
                <p><strong>Latitude: </strong>{estacao.lat}</p>
                <p><strong>Longitude: </strong>{estacao.lon}</p>
                <p>{estacao.nome}</p>

                <button className="button-a"> Editar</button>
                <button className="button-b" onClick={this.deleteStation}> Excluir</button>
                
                </div>
                
            </div>
            
        )
    }
}