import React, {Component} from 'react';
import {css} from 'react-emotion';
import Header from '../Header';

const layoutContainer = css`
    height: 100%;
    margin: 0 30px;
`;

const componentContainer = css`
    display: flex;  
    background: #fff;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export default (props) => {
    return (
        <div className={layoutContainer}>
            <Header/>
            <div className={componentContainer}>
                {props.children && props.children}
            </div>
        </div>
    )
}
