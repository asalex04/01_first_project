import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = ({status, updateStatus}) => {
  const [editMode, setEditMode] = useState(false)
  const [newStatus, setStatus] = useState(status)

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(newStatus)
  }

  const onStatusChange = (e) => setStatus(e.currentTarget.value)

  useEffect(() => {
    setStatus(status)
  }, [status])

    return (
      <div>
        {!editMode ?
          <div>
            <span onDoubleClick={activateEditMode}><b>Status</b>: {status || 'status'}</span>
          </div>
          :
          <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
          </div>
        }
      </div>
    )
}

export default ProfileStatusWithHooks;
