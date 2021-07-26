import React from 'react';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import {reduxForm, Field} from "redux-form";
import classes from './Diaglos.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const {messages, dialogs} = props.dialogsPage;

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to='/login' />

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogs.map(el => <DialogItem {...el} key={_.uniqueId()} />)}
      </div>
      <div className={classes.messages}>
        {messages.map(el => <Message message={el} key={_.uniqueId()}/>)}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'}
               name={'newMessageBody'}
               placeholder='Enter your message'
        />
      </div>
      <div><button>Add post</button></div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;
