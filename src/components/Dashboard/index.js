import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
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
