import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
    <>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} alt='img'/>
        <ProfileStatus status={status.data} updateStatus={updateStatus}/>
      </div>
    </>
  )
}

export default ProfileInfo;
