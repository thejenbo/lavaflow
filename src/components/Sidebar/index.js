import React from 'react';
import { css } from 'react-emotion';
import NotesList from '../NotesList';
import { COLOR_PRIMARY } from '../../lib/styles';
import Toolbar from '../Toolbar';

const sidebar = css`
    border-right: 1px solid ${COLOR_PRIMARY};  
    max-width: 300px;
    width: 35%;
    display: flex;
    flex-direction: column;
`;

const Sidebar = props => (
    <aside className={sidebar}>
        {props.notes.length > 0 && <NotesList notes={props.notes} current={props.current}/>}
    </aside>
)

export default Sidebar;
