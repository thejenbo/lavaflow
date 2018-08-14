import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'react-emotion'

const Button = styled('button')`
    border: none;
    border-radius: 3px;
    background: #fff;
    padding: 10px;

    a {
        color: #98bbd8;
        font-size: 32px;
        text-decoration: none;
    }
`

export default props => (
    <Button {...props}>
        { !props.link && props.children}
        { props.link && <Link to={props.link}><a>{props.children}</a></Link> }
    </Button>
)
