import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion'
import { startLogIn } from '../../actions/auth';
import Layout from '../Layout';
import Logo from '../Logo';
import Button from '../Button';


const Login = (props) => {

    return (
        <Layout>
            <Button
                onClick={props.onClick}
                value="login with google"
            />
        </Layout>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: dispatch(startLogIn(state.email, state.password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
