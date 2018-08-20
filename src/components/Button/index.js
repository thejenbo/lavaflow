import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'
import { COLOR_PRIMARY, GRADIENT_PRIMARY } from '../../lib/styles'

const Button = styled('button')`
    border: none;
    border-radius: 3px;
    background: #fff;
    color: ${COLOR_PRIMARY};
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    border-radius: 3px;

    &.gradientBorder {
        background: transparent;
        border: 3px solid transparent;
        border-image: ${GRADIENT_PRIMARY};
        border-image-slice: 1;
    }
`

export default props => (
    <Button className={props.theme && props.theme} {...props}>
        { !props.link && props.children}
        { props.link && <Link to={props.link}><a>{props.children}</a></Link> }
    </Button>
)
