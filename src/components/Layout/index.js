import React from 'react';
import {css} from 'react-emotion';
import Header from '../Header';

const layout = css`
    max-width: 1440px;
    margin: auto;
    min-height: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const componentContainer = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: 100%;
    padding: 0 15px;
`;

export default (props) => {
    return (
        <div className={layout}>
            <Header/>
            <div className={componentContainer}>
                {props.children && props.children}
            </div>
        </div>
    )
}
