import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';
import { RightArrow } from '../Svgs';

const notesList = css`
    color: #ec008c;
    width: 100%;
`;

const notesListItem = css`
    display: flex;
    padding: 0 15px;
    margin-bottom: 15px;
    overflow: hidden;
    color: #2F4858;
    text-decoration: none;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    justify-content: space-between;
    align-items: center;
`;

const noteContent = css``;

const NotesList = props => (
    <div className={notesList}>
        {props.notes.map((note) => (
            <Link to={`/note/${note.id}`} className={notesListItem} key={note.id}>
                <div className={noteContent}>
                    <h3>
                        {note.createdAt}
                    </h3>
                    <p>
                        {note.text}
                    </p>
                </div>
                <div 
                    style={{width: '22px', height: '37px'}}
                    onClick={() => this.toggleMenu()}
                >
                    <RightArrow/>
                </div>
            </Link>
        ))}
    </div>
);

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NotesList);
