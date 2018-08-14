import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppRouter, { history } from '../../routers/AppRouter';
import {startDeleteNote, startEditNote} from '../../actions/notes';
import styled from 'react-emotion';
import Button from '../Button';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class NoteForm extends Component {
    state = {
        text: this.props.note.text || '',
        createdAt: '',
        error: ''
    }

    componentWillMount() {
        this.timer = null;
    }

    componentDidUpdate() {
        if (this.state.text !== this.props.note.text) {
            this.setState({
                text: this.props.note.text
            });
        }
    }

    handleChange(text) {
        clearTimeout(this.timer);

        this.setState({ text });

        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    }

    handleKeyDown(e) {
        clearTimeout(this.timer);
        if (e.keyCode === ENTER_KEY) {
            this.triggerChange();
        }
    }

    triggerChange() {
        const { text } = this.state;

        this.props.onChange(text);
    }

    handleTextareaChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    // handleSaveClick(e) {
    //     e.preventDefault();
    //     if (!this.state.text) {
    //         return this.setState({
    //             error: 'Your note is empty!'
    //         });
    //     } else if (this.props.note.text === this.state.text) {
    //         return;
    //     } else {
    //         return this.setState({
    //             error: '',
    //             createdAt: Moment().format()
    //         }, () => this.props.onSave(this.props.note.id, this.state.text, this.state.createdAt));
    //     }
    // }

    render() {
        const id = this.props.note.id || null;
        return (
            <form 
                className=""
                onSubmit={(e) => e.preventDefault()} 
                key={id}
            >
                <textarea 
                    defaultValue={this.state.text}
                    placeholder="Look, it's a brand new note!"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                {id && 
                    (<Button onClick={() => this.props.onDeleteClick(id)}>
                        Delete
                    </Button>)
                }
                {this.state.error && <p>{this.state.error}</p>}
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: (id, text, createdAt) => {
            const note = {
                text, createdAt
            };
            dispatch(startEditNote(id, note));
        },
        onDeleteClick: id => {
            dispatch(startDeleteNote({id}));
            history.push('/');
        }
    }
}

export default connect(undefined, mapDispatchToProps)(NoteForm);
