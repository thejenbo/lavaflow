import React, {Component} from 'react';
import {connect} from 'react-redux';
import {css} from 'react-emotion';
import Moment from 'moment';
import AppRouter, { history } from '../../routers/AppRouter';
import {startEditNote, startDeleteNote} from '../../actions/notes';
import Button from '../Button';

const noteForm = css`
    flex: 1;
    padding: 30px;
    border-left: 2px solid #ec008c;
`;

class ViewNote extends Component {

    state = {
        text: this.props.note.text,
        createdAt: '',
        error: ''
    }

    componentDidUpdate() {
        if (this.state.text !== this.props.note.text) {
            this.setState({
                text: this.props.note.text
            });
        }
    }

    handleTextareaChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSaveClick(e) {
        e.preventDefault();
        if (!this.state.text) {
            return this.setState({
                error: 'Your note is empty!'
            });
        } else if (this.props.note.text === this.state.text) {
            return;
        } else {
            return this.setState({
                error: '',
                createdAt: Moment().format()
            }, () => this.props.onSave(this.props.note.id, this.state.text, this.state.createdAt));
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className={noteForm} onSubmit={(e) => e.preventDefault()} key={this.props.note.id}>
                    <textarea 
                        defaultValue={this.props.note.text}
                        onChange={(e) => this.handleTextareaChange(e)}
                    />
                    <Button onClick={(e) => this.handleSaveClick(e)}>Save</Button>
                    <Button onClick={() => this.props.onDeleteClick(this.props.note.id)}>Delete</Button>
                    {this.state.error && 
                        (<p>{this.state.error}</p>)}
                </form>
            </React.Fragment>
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

export default connect(undefined, mapDispatchToProps)(ViewNote);
