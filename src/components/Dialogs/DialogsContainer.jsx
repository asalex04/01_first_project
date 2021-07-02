import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs_reducer";

const DialogsContainer = (props) => {
  const onSendMessage = () => {
    props.dispatch(sendMessageCreator())
  }

  const onChangeMessage = (message) => {
    props.dispatch(updateNewMessageCreator(message))
  }

  return (
    <Dialogs updateNewMessage={onChangeMessage}
             sendMessage={onSendMessage}
             state={props.state}/>
  )
}

export default DialogsContainer;
