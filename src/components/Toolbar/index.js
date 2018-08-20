import React, { PureComponent } from 'react';
import AddNote from '../AddNote';

const Toolbar = props => (
    <React.Fragment>
        <AddNote style={{marginBottom: '15px', width: '42px', height: '42px'}}/>
    </React.Fragment>
)

export default Toolbar;
