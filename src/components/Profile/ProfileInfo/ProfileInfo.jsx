import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt='img'/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}
        <ProfileStatus status={status.data} updateStatus={updateStatus}/>
      </div>
    </>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div onClick={goToEditMode}><button>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {profile.lookingForAJob &&
    <div>
      <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b><u>Contacts</u></b>:
      {Object.keys(profile.contacts).map(key=> {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
    </div>
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
