import React from 'react';
import { NavLink } from 'react-router-dom';
import x from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${x.dialog} ${x.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={x.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={x.dialogs}>
            <div className={x.dialogsItems}>

                <DialogItem name='Lena' id='1' />
                <DialogItem name='Dimas' id='2' />
                <DialogItem name='Alex' id='3' />
                <DialogItem name='Andrey' id='4' />
                <DialogItem name='Oleg' id='5' />
                <DialogItem name='Mam' id='6' />
                <DialogItem name='Dad' id='7' />

            </div>
            <div className={x.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Hello' />
            </div>
        </div>
    )
}

export default Dialogs;