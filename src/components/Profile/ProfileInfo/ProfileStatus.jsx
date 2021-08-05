import React, {useEffect, useState} from 'react';

const ProfileStatus = ({ status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false)
  const [newStatus, setStatus] = useState(status)

  useEffect(() => {
    setStatus(status)
  }, [status])

  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(newStatus)
  }
  // todo-fix deal with sending status
  const onStatusChange = (e) => setStatus(e.currentTarget.value)

    return (
      <div>
        {!editMode ?
          <div>
            <span onClick={activateEditMode}><b>Status</b>: {status || 'status'}</span>
          </div>
          :
          <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
          </div>
        }
      </div>
    )
}

export default ProfileStatus;
