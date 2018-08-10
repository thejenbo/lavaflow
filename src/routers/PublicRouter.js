import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRouter = ({
    isAuth, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        !isAuth ? (
            <React.Fragment>
                <Component {...props} />
            </React.Fragment>
        ) : (
            <Redirect to="/dashboard" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(PublicRouter);
