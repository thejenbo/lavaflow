import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { startLogOut } from '../../actions/auth';
import {CloseMenu} from '../Svgs';

const Nav = styled('nav')`
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 15px;
    position: relative;

    a {
        color: #fc6767;
        font-size: 24px;
        font-weight: bold;
        margin-right: 15px;
        margin-bottom: 30px;
        text-decoration: none;
        transition: 500ms color;

        &:hover {
            color: #ec008c;
        }
        
        &:last-child {
            margin-right: 0;
        }
    }
`;

const menuToggle = css`
    top: 15px;
    right: 15px;
    position: absolute;
    z-index: 500;
`;

const MainNav = ({ onClick, clickHandler }) => (
    <Nav>
        <div 
            className={menuToggle}
            style={{width: '50px', height: '42px', cursor: 'pointer'}}
            onClick={clickHandler}
        >
            <CloseMenu/>
        </div>
        
        <Link to="/dashboard">dashboard</Link>
        <Link to="/create">new note</Link>
        <Link to="/" onClick={onClick}>logout</Link>
    </Nav>
);

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(startLogOut())
    }
}

export default connect(undefined, mapDispatchToProps)(MainNav);
