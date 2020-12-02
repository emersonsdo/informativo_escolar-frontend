import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import Parent from '../pages/parent';
import Login from '../pages/login';
import Home from '../pages/home';
import UserRegister from '../pages/user/register';
import history from '../utils/history';

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/pais/cadastro" component={Parent} />
      {/* Também serão rotas privadas */}
      <Route path="/inicio" component={Home} />
      <Route path="/usuarios/cadastro" component={UserRegister} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
