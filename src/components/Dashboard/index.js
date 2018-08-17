import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../Toolbar';
import Sidebar from '../Sidebar';
import Editor from '../Editor';

class Dashboard extends Component {

    render() {
        return (
            <React.Fragment>
                {!this.props.notes.length && 
                    <h3 style={{color: '#fff'}}>You haven't created any notes yet!</h3>
                }
                <Toolbar/>
                <div style={{display: 'flex'}}>
                    <Sidebar notes={this.props.notes} />
                    <Editor noteId={this.props.match ? this.props.match.params.id : null} />
                </div>
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
