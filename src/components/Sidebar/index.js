import React, { PureComponent } from 'react';
import { css } from 'react-emotion';
import NotesList from '../NotesList';
import { COLOR_PRIMARY } from '../../lib/styles';

const sidebar = css`
    border-right: 1px solid ${COLOR_PRIMARY};  
`;

const Sidebar = props => (
    <aside className={sidebar}>
        {props.notes.length > 0 && <NotesList notes={props.notes}/>}
    </aside>
)

export default Sidebar;
