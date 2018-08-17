import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Button from '../Button';
import { startCreateNote } from '../../actions/notes';

const Toolbar = props => (
    <React.Fragment>
        <Button onClick={props.onClick} style={{marginBottom: '15px'}}>
            Create New Note  
        </Button>
    </React.Fragment>
)

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            const createdAt = moment().format();
            dispatch(startCreateNote('', createdAt));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Toolbar);
