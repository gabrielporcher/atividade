import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './styles.css';

export default class Dados_edit extends Component {
    state = {
        dado: {
            estacao_id: '',
            temperatura: '',
            velocidade_vento: '',
            umidade: '',
            data: ''
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/dados/${id}`)

        this.setState({ dado: response.data })
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
        const {estacao_id, temperatura, velocidade_vento, umidade, data} = this.state.dado

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
                            defaultValue={estacao_id} 
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Temperatura:</label>
                            <input type="text" 
                            name="temperatura"
                            defaultValue={temperatura}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Velocidade do vento:</label>
                            <input type="text" 
                            name="velocidade_vento"
                            defaultValue={velocidade_vento}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Umidade:</label>
                            <input type="text" 
                            name="umidade"
                            defaultValue={umidade}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Data:</label>
                            <input type="text" 
                            name="data"
                            defaultValue={data}
                            onChange={this.changeHandler}/>
                        </div>
                        <button type="submit" className="btn-submit">Alterar</button>
                    </form>
                </div>
            </div>
        )
    }
}