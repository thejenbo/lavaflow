import React, {Component} from 'react';
import {css} from 'react-emotion';
import Header from '../Header';

const layoutContainer = css`
    height: 100%;
`;

const componentContainer = css`
    display: flex;
    flex-direction: column;
    max-height: 100%;
`;

export default (props) => {
    return (
        <React.Fragment>
            <Header/>
            <div className={componentContainer}>
                {props.children && props.children}
            </div>
        </React.Fragment>
    )
}
