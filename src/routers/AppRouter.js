import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ViewNote from '../components/ViewNote';
import NotFound from '../components/NotFound';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const history = createHistory();
 
const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Switch>
                <PublicRouter 
                    path="/"
                    component={Login}
                    exact={true}
                />
                <PrivateRouter 
                    path="/dashboard/"
                    component={Dashboard}
                />
                <PrivateRouter 
                    path="/note/:id"
                    component={ViewNote}
                />
                <Route 
                    component={NotFound}
                />
            </Switch>
        </React.Fragment>
    </Router>
);

export default AppRouter;
