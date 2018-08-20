import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';
import moment from 'moment';
import { COLOR_PRIMARY } from '../../lib/styles';

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
    border-bottom: 1px solid ${COLOR_PRIMARY};
    justify-content: space-between;
    align-items: center;
`;

const noteContent = css`
    & > * {
        margin: 0;
    }
`;

const NotesList = ({notes}) => {
    const truncateText = text => {
        if (text.length > 15) {
            let truncatedText = text.substring(0, 20);
            return `${truncatedText}...`;
        } else {
            return `${text}...`
        }
    }
    return (
        <div className={notesList}>
            {notes.map((note) => (
                <Link 
                    to={`/note/${note.id}`} 
                    className={notesListItem} key={note.id}
                >
                    <div className={noteContent}>
                        <h5 style={{marginBottom: '5px'}}>
                            {moment(note.createdAt).fromNow()}
                        </h5>
                        <p>
                            {note.text.length ? truncateText(note.text) : 'A brand new note'}
                        </p>
                    </div>
                    
                </Link>
            ))}
        </div>
    );
};

export default NotesList;