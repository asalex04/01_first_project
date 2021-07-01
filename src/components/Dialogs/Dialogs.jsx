import React from 'react';
import classes from './Diaglos.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
  const {messages, dialogs, newMessageText} = props.state;

  const onSendMessage = () => {
    props.dispatch(sendMessageCreator())
  }

  const onChangeMessage = (e) => {
    const message = e.target.value
    props.dispatch(updateNewMessageCreator(message))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogs.map(el => <DialogItem {...el} />)}
      </div>
      <div className={classes.messages}>
        {messages.map(el => <Message message={el}/>)}
      </div>
      <div>
        <div>
          <textarea value={newMessageText}
                    onChange={onChangeMessage}
                    placeholder='Enter your message' />
        </div>
        <div>
          <button onClick={onSendMessage}>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
