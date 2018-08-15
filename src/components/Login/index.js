import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion'
import { startLogin } from '../../actions/auth';
import {Logo} from '../Svgs';
import Button from '../Button';

const loginContainer = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

class Login extends Component {
    render() {
        return (
            <div className={loginContainer}>
                <div style={{width: '216px', height: '42px', display: 'block', marginBottom: '20px'}}>
                    <Logo/>
                </div>

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
