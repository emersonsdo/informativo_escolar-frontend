import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes'
import Parent from '../pages/parent';
import Login from '../pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/parents" component={Parent} />
            <Route exact path="/" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;