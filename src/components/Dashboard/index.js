import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled, { css } from 'react-emotion'

const DashboardContainer = styled('div')`
  color: #fff;
  font-size: 32px;
  text-decoration: none;
`

class Dashboard extends Component {

    render () {
        return (
            <div>
            {this.props.cases &&
                this.props.cases.map((theCase) =>
                    <Link to={`/case/${theCase.id}`} key={theCase.id} style={{display:'block'}}>
                        <a>{theCase.name}</a>
                    </Link>
                )
            }
            {!this.props.cases && 
                <p>No cases to display.</p>
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Dashboard);
