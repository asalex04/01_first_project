import React from 'react';
import classes from './Diaglos.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const { messages, dialogs } = props;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map(el => <DialogItem {...el} />)}
            </div>
            <div className={classes.messages}>
                {messages.map(el => <Message message={el} />)}
            </div>
            <div>
                <textarea></textarea>
            </div>
           <div>
                <button >Add post</button>
            </div>

        </div>
    )
}

export default Dialogs;