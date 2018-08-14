import React, {Component} from 'react';
import styled, { css } from 'react-emotion'

const LogoContainer = styled('a')`
  color: #fff;
  font-size: 32px;
  text-decoration: none;
`

const Logo = props => {
    return (
        <LogoContainer href="/" style={props.style}>
            lavaflow
        </LogoContainer>
    )
}

export default Logo;
