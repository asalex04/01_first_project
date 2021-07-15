import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <>
      <div className={classes.content}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbqE4Qpmgj6m5_IM0AY0a6Gn08S9CLf08A97ihcrdpJh6Tbfj55WoYE-cnXR6GUUMavY&usqp=CAU"
          alt=''/>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <h3>
          {props.profile.fullName}
        </h3>
        <div>
          {props.profile.aboutMe}
        </div>

      </div>
    </>
  )
}

export default ProfileInfo;
