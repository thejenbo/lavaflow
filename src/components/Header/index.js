import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import styled, { css } from 'react-emotion'
import {Logo, OpenMenu, PlusSign} from '../Svgs';
import MainNav from '../MainNav';

const StyledHeader = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 15px;
`

const Drawer = styled('div')`
    position: fixed;
    height: 100%;
    top: 0;
    right: -250px;
    transition: 500ms right;
    z-index: 1;

    &.open {
        right: 0;
    }
`

class Header extends PureComponent {
    state = {
        navIsOpen: false
    }

    toggleMenu = this.toggleMenu.bind(this);

    toggleMenu() {
        this.setState({navIsOpen: !this.state.navIsOpen})
    }

    render() {
        return (
            <StyledHeader>
                <Link
                    to="/"
                    style={{width: '216px', height: '42px', display: 'block'}}
                >
                    <Logo/>
                </Link>

                <div 
                    style={{width: '36px', height: '32px', cursor: 'pointer'}}
                    onClick={() => this.toggleMenu()}
                >
                    <OpenMenu/>
                </div>

                <Drawer className={this.state.navIsOpen && 'open'}>
                    <MainNav clickHandler={this.toggleMenu}/>
                </Drawer>
            </StyledHeader>
        )
    }
}

export default Header;
