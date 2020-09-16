import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import './styles.css'

export default class Estacoes_add extends Component {
    state = {
       serial: '',
       lat: '',
       lon: '',
       nome: '' 
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        api.post('/estacoes', this.state).then(_ => {
            this.props.history.push('/estacoes')
        }).catch(error => {
            console.log(error)
        })
        
    }

    render() {
        const {serial, lat, lon, nome} = this.state

        return (
            <div>
                <div className="actions">
                <Link to="/estacoes" className="back-btn">Voltar</Link>
                </div>

                <div className="main-div">
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label>Serial:</label>
                            <input type="text" 
                            name="serial"
                            value={serial} 
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Latitude:</label>
                            <input type="text" 
                            name="lat"
                            value={lat}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Longitude:</label>
                            <input type="text" 
                            name="lon"
                            value={lon}
                            onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Nome:</label>
                            <input type="text" 
                            name="nome"
                            value={nome}
                            onChange={this.changeHandler}/>
                        </div>
                        <button type="submit" className="btn-submit">Adicionar</button>
                    </form>
                </div>
            </div>
        )
    }
}