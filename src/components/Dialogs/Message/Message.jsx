import React from 'react';
import x from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={x.message}><img src={props.avatarUser} />{props.message}</div>
    )
}

export default Message;