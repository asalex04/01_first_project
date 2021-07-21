import React, {useState} from 'react';

const ProfileStatus = (props) => {
  const [editMode, setMode] = useState(false)

  const toggleMode = () => {
    setMode(!editMode);
  }

  return (
    <div>
      {!editMode ?
        <div>
          <span onClick={toggleMode}>{props.status}</span>
        </div>
        :
        <div>
          <input autoFocus={true} onBlur={toggleMode} value={props.status}></input>
        </div>
      }
    </div>
  )
}

export default ProfileStatus;
