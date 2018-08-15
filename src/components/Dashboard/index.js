import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion'
import Button from '../Button';
import NotesList from '../NotesList';
import NoteForm from '../NoteForm';

const Drawer = styled('div')`
    position: fixed;
    height: 100%;
    top: 0;
    left: -100%;
    transition: 500ms left;

    &.open {
        left: 0;
    }
`

class Dashboard extends Component {
    state = {
        noteFormIsOpen: false
    }

    selectedNote = this.props.match.params.id ? this.props.notes.find((note) => note.id === this.props.match.params.id) : this.props.notes[0];

    toggleNoteForm = this.toggleNoteForm.bind(this);

    toggleNoteForm() {
        this.setState({noteFormIsOpen: !this.state.noteFormIsOpen})
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.notes.length && 
                    <h3 style={{color: '#fff'}}>You haven't created any notes yet!</h3>
                }
                {this.props.notes.length > 0 && <NotesList clickHandler={this.toggleNoteForm}/>}
                <Drawer className={this.state.noteFormIsOpen && 'open'}>
                    <NoteForm note={this.selectedNote}/>
                </Drawer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Dashboard);
