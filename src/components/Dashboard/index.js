import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import AddNote from '../AddNote';
import NotesList from '../NotesList';
import Toolbar from '../Toolbar';
import { COLOR_PRIMARY } from '../../lib/styles';

const notesContainer = css`
    border: 1px solid ${COLOR_PRIMARY};
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 15px;
`;

class Dashboard extends PureComponent {

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
                        <div className={notesContainer}>
                            <Toolbar pathname={this.props.location.pathname}/>
                            <NotesList notes={this.props.notes} />
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Dashboard);
