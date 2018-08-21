import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { history } from '../../routers/AppRouter';
import moment from 'moment';
import { startDeleteNote, startEditNote } from '../../actions/notes';
import { css } from 'react-emotion';
import Button from '../Button';
import { Delete } from '../Svgs';

const WAIT_INTERVAL = 500;

const noteForm = css`
    height: 100%;
    position: relative;
`

const textArea = css`
    width: 100%;
    height: 100%;
    flex: 1;
    border-radius: 3px;
    padding: 15px;
    border: none;
    resize: none;
`

const deleteBtn = css`
    width: 18px;
    height: 22px;
    padding: 0;
    background: transparent;
`;

const btnContainer = css`
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
`;

class NoteForm extends PureComponent {
    state = {
        text: '',
        createdAt: ''
    }

    timer = null;
    id = this.props.noteId ? this.props.noteId : null;
    selectedNote = this.id ? this.props.notes.find((note) => note.id === this.id) : null;

    handleChange = e => {
        this.setState({ 
            text: e.target.value 
        });
        
        clearTimeout(this.timer);
        this.timer = setTimeout(this.triggerSave.bind(this), WAIT_INTERVAL);
    }

    triggerSave = () => {
        this.props.onSave(this.state.text, this.id);
    }

    handleTextareaChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    componentWillUnmount = () => {
        clearTimeout(this.timer);
    }

    render() {

        return (
            <form 
                onSubmit={(e) => e.preventDefault()}
                key={this.id}
                className={noteForm}
            >
                <textarea 
                    className={textArea}
                    defaultValue={this.selectedNote ? this.selectedNote.text : ''}
                    placeholder="Look, it's a brand new note!"
                    onChange={this.handleChange}
                />
                <div className={btnContainer}>
                    <Button 
                        onClick={() => this.props.onDeleteClick(this.id)}
                        className={deleteBtn}
                    >
                        <Delete />
                    </Button>
                </div>
                {this.state.error && <p>{this.state.error}</p>}
            </form>
        )
    }
}

const mapStateToProps = state => {
    return state;
}   

const mapDispatchToProps = dispatch => {
    return {
        onSave: (text, id) => {
            const createdAt = moment().format();
            const note = {text, createdAt};
            if (id) {
                dispatch(startEditNote(id, note));
            }
        },
        onDeleteClick: id => {
            dispatch(startDeleteNote({id}));
            history.push('/');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
