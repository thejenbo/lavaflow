import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled, { css } from 'react-emotion'
import Button from '../Button';
import NotesList from '../NotesList';
import ViewNote from '../ViewNote';

class Dashboard extends Component {
    state = {
        selectedNote: this.props.notes[0]
    }

    componentDidMount() {
        this.setState({
            selectedNote: this.props.match.params.id ? this.props.notes.find((note) => note.id === this.props.match.params.id) : this.props.notes[0]
        });
    }

    render() {
        console.log('component rendered, selected note is: ', this.state.selectedNote);
        return (
            <React.Fragment>
                {!this.props.notes.length && 
                    <React.Fragment>
                        <p>You haven't created any notes yet!</p>
                        <Link to="/create">
                            <Button>
                                Create A Note
                            </Button>
                        </Link>
                    </React.Fragment>
                }
                {this.props.notes.length > 0 && 
                    <React.Fragment>
                        <NotesList/>
                        <ViewNote note={this.state.selectedNote}/>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Dashboard);
