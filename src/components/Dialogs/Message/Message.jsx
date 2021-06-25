import React from 'react';
import classes from '../Diaglos.module.css'

const Message = (props) => {
    const classMessage = props.message.type === 'answer'
        ? `${classes.message} ${classes.answer}`
        : `${classes.message}`

    return (
        <div className={classMessage}>{props.message.text}</div>
    )
}

export default Message;