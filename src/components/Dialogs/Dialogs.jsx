import React from 'react';
import classes from './Diaglos.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
    ]
    let messages = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How is your it-kamasutra?'},
        {id: 3, text: 'Yo'},
        {id: 4, text: 'Yo'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map(el => <DialogItem {...el} />)}
            </div>
            <div className={classes.messages}>
                {messages.map(el => <Message message={el.text} />)}
            </div>
        </div>
    )
}

export default Dialogs;