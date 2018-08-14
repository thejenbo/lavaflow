import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

export const PrivateRouter = ({
    isAuth, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuth ? (
            <Layout>
                <Component {...props} />
            </Layout>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(PrivateRouter);
