import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes'
import Parent from '../pages/parent';
import Login from '../pages/login';
import Home from '../pages/home';
import UserRegister from '../pages/user/register';
import history from '../utils/history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <PrivateRoute exact path="/pais" component = {Parent} />
            <Route exact path="/inicio" component = {Home} />
            <Route exact path="/usuarios/cadastro" component = {UserRegister} />
            <Route exact path="/" component={Login} />
        </Switch>
    </Router>
);

export default Routes;