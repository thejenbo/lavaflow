import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';
import AddNote from '../AddNote';
import { COLOR_PRIMARY } from '../../lib/styles';
import { LeftArrow } from '../Svgs';

const toolbarContainer = css`
    background: #fff;
    border-bottom: 1px solid ${COLOR_PRIMARY};
    padding: 10px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const addBtn = css`
    width: 25px;
    height: 25px;
    padding: 0;
    background: transparent;
`;

const dashboardLink = css`
    color: ${COLOR_PRIMARY};
    font-weight: bold;
    text-decoration: none;
`;

const Toolbar = props => (
    <div className={toolbarContainer}>
        {props.pathname !== '/dashboard' && 
            <Link className={dashboardLink} to="/dashboard">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{width: '13px', height: '25px', marginRight: '10px'}}>
                        <LeftArrow />
                    </div>
                    All Notes
                </div>
            </Link>
        }
        <AddNote className={addBtn}/>
    </div>
)

export default Toolbar;
