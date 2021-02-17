import React from 'react';
import x from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={x.dialog}>{props.message}</div>
    )
}

export default Message;