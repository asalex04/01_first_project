import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${classes.item}`}>
            <NavLink to={path} >
                <img src={props.ava} alt=''/>
                    {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
