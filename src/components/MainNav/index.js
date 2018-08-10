import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { startLogOut } from '../../actions/auth';

const Nav = styled('nav')`
    display: inline-flex;
    justify-content: space-around;

    a {
        color: #fff;
        font-size: 22px;
        margin-right: 15px;
        
        &:last-child {
            margin-right: 0;
        }
    }
`

const MainNav = ({ onClick }) => (
    <Nav>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/create">new case</Link>
        <Link to="/" onClick={onClick}>logout</Link>
    </Nav>
);

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(startLogOut())
    }
}

export default connect(undefined, mapDispatchToProps)(MainNav);
