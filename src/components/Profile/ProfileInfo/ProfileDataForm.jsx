import React from "react";
import {CreateField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {reduxForm} from "redux-form";
import styles from './ProfileInfo.module.css'
import {required} from "../../../utils/validators/validator";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    {error && <span className={style.formError}>
        {error}
      </span>}
    <div>
      <b>Full name</b>: {CreateField(null, null, required, 'fullName',
                        'fullName', 'text', 'Full name', Input)}
    </div>
    <div>
      <b>Looking for a job</b>: {CreateField('', '', required, 'lookingForAJob',
                                'lookingForAJob', 'checkbox', '',  Input)}
    </div>
    <div>
      <b>My professional skills</b>: {CreateField('', '', [], 'lookingForAJobDescription',
      'lookingForAJobDescription', '', 'My professional skills',  Textarea)}
    </div>
    <div>
      <b>About me</b>: {CreateField('', '', [], 'aboutMe',
      'aboutMe', '', 'About me',  Textarea)}
    </div>
    <div>
      <b><u>Contacts</u></b>: {Object.keys(profile.contacts).map(key=> {
        return <div key={key} className={styles.contact}>
          <b>{key}: {CreateField(null, null, [], key,
            'contacts.' + key, 'text', key, Input)}</b>
        </div>
      })}
    </div>
  </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit_profile'})(ProfileDataForm)
export default ProfileDataReduxForm
