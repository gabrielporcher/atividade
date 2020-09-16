import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Main extends Component {
    render() {
        return(
            <div className="data">
                <Link to="/estacoes" className="no-dec">
                    <article>
                        Estacoes
                    </article>
                </Link>

                <Link to="/dados" className="no-dec">
                    <article>
                        Dados
                    </article>
                </Link>
                
            </div>
        )
    }
}