import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import NoteForm from '../NoteForm';

const editorContainer = css`
    height: 100%;
    flex: 1;
`;

class Editor extends PureComponent {

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
