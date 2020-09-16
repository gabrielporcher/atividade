import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './styles.css';

export default class Dados_edit extends Component {
    state = {
        estacao_id: '',
        temperatura: '',
        velocidade_vento: '',
        umidade: '',
        data: ''
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/dados/${id}`)
        console.log(response)

        this.setState({ response })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        api.put(`/dados/${id}`, this.state).then(_ => {
            this.props.history.push('/dados')
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const {estacao_id, temperatura, velocidade_vento, umidade, data} = this.state

        return (
            <div>
                <div className="actions">
                <Link to="/dados" className="back-btn">Voltar</Link>
                </div>

                <div className="main-div">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>Id da estação:</label>
                            <input type="text" 
                            name="estacao_id"
                            value={estacao_id} 
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Temperatura:</label>
                            <input type="text" 
                            name="temperatura"
                            value={temperatura}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Velocidade do vento:</label>
                            <input type="text" 
                            name="velocidade_vento"
                            value={velocidade_vento}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Umidade:</label>
                            <input type="text" 
                            name="umidade"
                            value={umidade}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Data:</label>
                            <input type="text" 
                            name="data"
                            value={data}
                            onChange={this.changeHandler}/>
                        </div>
                        <button type="submit" className="btn-submit">Alterar</button>
                    </form>
                </div>
            </div>
        )
    }
}