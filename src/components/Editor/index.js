import React, { PureComponent } from 'react';
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

export default Editor;
