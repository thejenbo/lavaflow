import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import NoteForm from '../NoteForm';

const editorContainer = css`
    background: #fff;
    height: 100%;
`;

class Editor extends Component {

    render() {
        return (
            <div className={editorContainer}>
                <NoteForm noteId={this.props.noteId} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Editor);
