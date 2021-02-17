import React from 'react';
import x from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Lena' },
        { id: 2, name: 'Dimas' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Andrew' },
        { id: 5, name: 'Oleg' },
        { id: 6, name: 'Mam' },
        { id: 7, name: 'Dad' },
    ];

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hello' },
        { id: 4, message: 'Hello' },
        { id: 5, message: 'Hello' },
        { id: 6, message: 'Hello' },
        { id: 7, message: 'Hello' },
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />)


    return (
        <div className={x.dialogs}>
            <div className={x.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={x.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;