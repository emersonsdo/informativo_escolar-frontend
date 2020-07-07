import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes'
import Parent from '../pages/parent';
import Login from '../pages/login';
import history from '../utils/history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <PrivateRoute exact path="/parents" component={Parent} />
            <Route exact path="/" component={Login} />
        </Switch>
    </Router>
);

export default Routes;