import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';

const notesList = css`
    color: #ec008c;
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    background: #fff;
`;

const notesListItem = css`
    display: flex;
    padding: 15px;
    overflow: hidden;
    color: #2F4858;
    text-decoration: none;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    justify-content: space-between;
    align-items: center;
`;

const noteContent = css`
    & > * {
        margin: 0;
    }
`;

const NotesList = ({notes}) => (
    <div className={notesList}>
        {notes.map((note) => (
            <Link 
                to={`/note/${note.id}`} 
                className={notesListItem} key={note.id}
            >
                <div className={noteContent}>
                    <h3>
                        {note.createdAt}
                    </h3>
                    <p>
                        {note.text.length ? note.text : 'A brand new note'}
                    </p>
                </div>
                
            </Link>
        ))}
    </div>
);

export default NotesList;