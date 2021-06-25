import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    console.log(props)
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to={path} >
                <img src={props.ava} />
                    {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;