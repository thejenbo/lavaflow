import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppRouter, { history } from '../../routers/AppRouter';
import moment from 'moment';
import {startCreateNote} from '../../actions/notes';

class CreateNote extends Component {
    state = {
        text: '',
        createdAt: '',
        error: ''
    }

    handleTextareaChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmitClick(e) {
        e.preventDefault();
        if (!this.state.text) {
            this.setState({
                error: 'Your note is empty!'
            });
        } else {
            this.setState({
                error: '',
                createdAt: moment().format()
            }, () => this.props.onSubmit(this.state.text, this.state.createdAt));
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={(e) => this.handleSubmitClick(e)}>
                    <textarea onChange={(e) => this.handleTextareaChange(e, this.state.text)}/>
                    <input type="submit" value="Add Note"/>
                    {this.state.error && 
                        (<p>{this.state.error}</p>)}
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (text, createdAt) => {
            const note = {
                text, createdAt
            }
            dispatch(startCreateNote(note));
            history.push('/');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
