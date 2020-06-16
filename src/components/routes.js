import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes'
import Main from '../pages/main';
import Parent from '../pages/parent';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/parents" component={Parent} />
            <Route exact path="/" component={Main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;