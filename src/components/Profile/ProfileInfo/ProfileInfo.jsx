import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div className={classes.content}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbqE4Qpmgj6m5_IM0AY0a6Gn08S9CLf08A97ihcrdpJh6Tbfj55WoYE-cnXR6GUUMavY&usqp=CAU"
                    alt=''/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </>
    )
}

export default ProfileInfo;