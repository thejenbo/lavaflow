import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import AddNote from '../AddNote';
import Toolbar from '../Toolbar';
import Sidebar from '../Sidebar';
import Editor from '../Editor';
import { COLOR_PRIMARY } from '../../lib/styles';

const notesContainer = css`
    border: 1px solid ${COLOR_PRIMARY};
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex: 1;
`;

class Dashboard extends PureComponent {

    getCurrentId() {
        if (this.props.match.params.id) {
            return this.props.match.params.id;
        } else {
            return this.props.notes[0].id;
        }
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.notes.length && 
                    <div style={{textAlign: 'center'}}>
                        <h3 style={{color: '#fff'}}>You haven't created any notes yet!</h3>
                        <AddNote>Create A Note</AddNote>
                    </div>
                }
                {this.props.notes.length > 0 && 
                    <React.Fragment>
                        <Toolbar/>
                        <div className={notesContainer}>
                            <Sidebar notes={this.props.notes} current={this.getCurrentId()} />
                            <Editor noteId={this.getCurrentId()} />
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
