import React, {Component} from 'react';
import styled, { css } from 'react-emotion'

const LogoContainer = styled('a')`
  color: #fff;
  font-size: 32px;
  text-decoration: none;
`

class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <LogoContainer href="/" style={this.props.style}>
                lavaflow
            </LogoContainer>
        )
    }
}

export default Logo;
