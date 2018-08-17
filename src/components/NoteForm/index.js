import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../routers/AppRouter';
import moment from 'moment';
import { startDeleteNote, startCreateNote, startEditNote } from '../../actions/notes';
import { css } from 'react-emotion';
import Button from '../Button';

const WAIT_INTERVAL = 1500;

const textArea = css`
    width: 100%;
    height: 300px;
    border-radius: 3px;
    padding: 15px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    border: none;
`

class NoteForm extends Component {
    state = {
        text: '',
        createdAt: ''
    }

    componentWillMount() {
        this.timer = null;
        this.id = this.props.noteId ? this.props.noteId : null;
        this.selectedNote = this.id ? this.props.notes.find((note) => note.id === this.id) : null;
    }

    handleChange(e) {
        this.setState({ 
            text: e.target.value 
        });

        this.timer = setTimeout(this.triggerSave.bind(this), WAIT_INTERVAL);
    }

    triggerSave() {
        this.props.onSave(this.state.text, this.id);
    }

    handleTextareaChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {

        return (
            <form 
                onSubmit={(e) => e.preventDefault()}
                key={this.id}
            >
                <textarea 
                    className={textArea}
                    defaultValue={this.selectedNote ? this.selectedNote.text : ''}
                    placeholder="Look, it's a brand new note!"
                    onChange={(e) => this.handleChange(e)}
                />
                {this.id && 
                    (<Button onClick={() => this.props.onDeleteClick(this.id)}>
                        Delete
                    </Button>)
                }
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
            } else {
                dispatch(startCreateNote(note));
                history.push('/');
            }
        },
        onDeleteClick: id => {
            dispatch(startDeleteNote({id}));
            history.push('/');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
