import React, { Component } from 'react';
import NotesList from '../NotesList';

const Sidebar = props => (
    <aside>
        {props.notes.length > 0 && <NotesList notes={props.notes}/>}
    </aside>
)

export default Sidebar;
