import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Button from '../Button';
import { startCreateNote } from '../../actions/notes';
import { PlusSign } from '../Svgs';

const AddNote = props => (
    <React.Fragment>
        <Button onClick={props.onClick} {...props}>
            {props.children ? props.children : <PlusSign />}
        </Button>
    </React.Fragment>
)

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            const createdAt = moment().format();
            dispatch(startCreateNote({text: '', createdAt}));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(AddNote);
