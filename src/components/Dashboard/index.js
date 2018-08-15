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
    left: -300px;
    transition: 500ms left;

    &.open {
        left: 0;
    }
`

class Dashboard extends Component {
    state = {
        noteFormIsOpen: false
    }

    toggleNoteForm = this.toggleNoteForm.bind(this);

    toggleNoteForm() {
        this.setState({noteFormIsOpen: !this.state.noteFormIsOpen})
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.notes.length && 
                    <React.Fragment>
                        <p>You haven't created any notes yet!</p>
                        <Link to="/create">
                            <Button
                                onClick={() => this.toggleNoteForm()}
                            >
                                Create A Note
                            </Button>
                        </Link>
                    </React.Fragment>
                }
                {this.props.notes.length > 0 && <NotesList/>}
                <Drawer>
                    <NoteForm/>
                </Drawer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Dashboard);
