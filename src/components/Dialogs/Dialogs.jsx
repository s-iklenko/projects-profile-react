import React from 'react';
import x from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message avatarUser={m.avatarUser} message={m.message} />)

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