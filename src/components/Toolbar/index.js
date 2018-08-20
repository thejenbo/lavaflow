import React from 'react';
import { css } from 'react-emotion';
import AddNote from '../AddNote';

const toolbarContainer = css`
    background: #fff;
    padding: 10px 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
`;

const addBtn = css`
    width: 25px;
    height: 25px;
    padding: 0;
    background: transparent;
`;

const Toolbar = () => (
    <div className={toolbarContainer}>
        <AddNote className={addBtn}/>
    </div>
)

export default Toolbar;
