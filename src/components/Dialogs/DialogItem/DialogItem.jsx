import React from 'react';
import { NavLink } from 'react-router-dom';
import x from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${x.dialog}`}>
            <NavLink to={path} activeClassName={x.active}><img src={props.avatar} /><span>{props.name}</span></NavLink>
        </div>
    )
}

export default DialogItem;