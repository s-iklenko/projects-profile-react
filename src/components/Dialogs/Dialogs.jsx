import React from 'react';
import x from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message avatarUser={m.avatarUser} message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text})
    }

    return (
        <div className={x.dialogs}>
            <div className={x.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={x.messages}>
                {messagesElements}
                <div className={x.text}>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
                    <button onClick={addMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;