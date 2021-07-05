import React from 'react';
import _ from 'lodash';

import classes from './Diaglos.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const {messages, dialogs, newMessageText} = props.dialogsPage;

  const onSendMessage = () => {
    props.sendMessage()
  }

  const onChangeMessage = (e) => {
    const message = e.target.value
    props.updateNewMessage(message)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogs.map(el => <DialogItem {...el} key={_.uniqueId()} />)}
      </div>
      <div className={classes.messages}>
        {messages.map(el => <Message message={el} key={_.uniqueId()}/>)}
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
