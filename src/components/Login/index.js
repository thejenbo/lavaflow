import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion'
import { startLogin } from '../../actions/auth';
import Layout from '../Layout';
import Logo from '../Logo';
import Button from '../Button';


class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Button
                    onClick={() => this.props.onClick()}
                >
                    login with google
                </Button>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(Login);
