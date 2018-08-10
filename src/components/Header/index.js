import React, { Component } from 'react';
import styled, { css } from 'react-emotion'
import MainNav from '../MainNav'
import Logo from '../Logo';

const StyledHeader = styled('header')`
    display: flex;
    justify-content: space-between;
`

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <StyledHeader>
                <Logo/>
                <MainNav/>
            </StyledHeader>
        )
    }
}

export default Header;
