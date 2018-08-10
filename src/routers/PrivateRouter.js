import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRouter = ({
    isAuth, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuth ? (
            <React.Fragment>
                <Header />
                <Component {...props} />
            </React.Fragment>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(PrivateRouter);
