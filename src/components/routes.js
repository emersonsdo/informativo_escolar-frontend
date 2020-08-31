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
      <PrivateRoute path="/pais" component={Parent} />
      <Route path="/inicio" component={Home} />
      <Route path="/usuarios/cadastro" component={UserRegister} />
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
