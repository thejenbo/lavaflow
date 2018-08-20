import React from 'react';
import {css} from 'react-emotion';
import Header from '../Header';

const componentContainer = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: 100%;
    padding: 0 15px;
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
