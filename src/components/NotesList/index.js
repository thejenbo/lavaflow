import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';

const notesList = css`
    color: #ec008c;
`;

const notesListItem = css`
    padding: 0 15px;
    overflow: hidden;
    display: block;

    a {
        color: #fc6767;
    }
`;

const NotesList = props => (
    <aside className={notesList}>
        {props.notes.map((note) => (
            <Link to={`/note/${note.id}`} className={notesListItem} key={note.id}>
                <h2>
                    {note.createdAt}
                </h2>
                <p>
                    {note.text}
                </p>
            </Link>
        ))}
    </aside>
);

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NotesList);
