import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { history } from '../../routers/AppRouter';
import moment from 'moment';
import Button from '../Button';
import { startCreateNote } from '../../actions/notes';
import { PlusSign } from '../Svgs';

class AddNote extends PureComponent {

    componentDidUpdate(prevProps) {
        if (this.props.notes.length > prevProps.notes.length) {
            history.push(`/note/${this.props.notes[0].id}`);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.props.onClick} {...this.props}>
                    {this.props.children ? this.props.children : <PlusSign />}
                </Button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            const createdAt = moment().format();
            dispatch(startCreateNote({text: '', createdAt}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
