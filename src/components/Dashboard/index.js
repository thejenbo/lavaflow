import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import Toolbar from '../Toolbar';
import Sidebar from '../Sidebar';
import Editor from '../Editor';

const notesContainer = css`
    background: #fff;
    display: flex;
    flex: 1;
`;

class Dashboard extends Component {

    render() {
        return (
            <React.Fragment>
                <Toolbar/>
                {!this.props.notes.length && 
                    <h3 style={{color: '#fff'}}>You haven't created any notes yet!</h3>
                }
                {this.props.notes.length > 0 && 
                    <React.Fragment>
                        <div className={notesContainer}>
                            <Sidebar notes={this.props.notes} />
                            <Editor noteId={this.props.match.params.id ? this.props.match.params.id : this.props.notes[0].id} />
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(Dashboard);
