import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Estacoes from './pages/estacoes';
import Estacoes_id from './pages/estacoes_id';
import Estacoes_add from './pages/estacoes_add';
import Dados from './pages/dados';
import Dados_add from './pages/dados_add';
import Dados_id from './pages/dados_id';
import Dados_edit from './pages/dados_edit'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/estacoes" component={Estacoes} />
            <Route path="/estacoes/:id" component={Estacoes_id} />
            <Route exact path="/add/estacao" component={Estacoes_add} />
            <Route exact path="/add/dado" component={Dados_add} />
            <Route exact path="/dados" component={Dados} />
            <Route exact path="/dados/:id" component={Dados_id} />
            <Route path="/dados/alterar/:id" component={Dados_edit} />
        </Switch>
    </BrowserRouter>
)

export default Routes;