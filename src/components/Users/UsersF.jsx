import React, {useEffect, useState} from "react";
import * as axios from "axios";
import classes from "./Users.module.css";
import userPhoto from '../../../src/assets/images/user.png';

const Users = (props) => {
  const [users, setUsers] = useState()
  useEffect((props) => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items)
      })
  }, [])
  // props.setUsers( [
      //   {
      //     id: 1,
      //     followed: 'true',
      //     fullName: 'Dimych',
      //     status: 'I am a boss',
      //     locations: {city: 'Minsk', country: 'Belarus'},
      //     ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'
      //   },
      //   {
      //     id: 2,
      //     followed: 'false',
      //     fullName: 'Andrey',
      //     status: 'I am a boss',
      //     locations: {city: 'Moscow', country: 'Russia'
      //     }, ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'
      //   },
      //   {
      //     id: 3,
      //     followed: 'true',
      //     fullName: 'Sveta',
      //     status: 'I am a boss',
      //     locations: {city: 'Kiev', country: 'Ukraine'},
      //     ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'
      //   },
      //   {
      //     id: 4,
      //     followed: 'false',
      //     fullName: 'Sasha',
      //     status: 'I am a boss',
      //     locations: {city: 'Piter', country: 'Russia'},
      //     ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'
      //   },
      // ])

  return <div>
    {
      users.map(user => <div key={user.id}>
          <span>
            <div className={classes.item}>
              <img src={user.photos.small ? user.photos.small : userPhoto}/>
            </div>
            <div>
              {user.followed
                ? <button onClick={() => props.follow(user.id) }>Unfollow</button>
                : <button onClick={() => props.follow(user.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{'user.locations.country'}</div>
            <div>{'user.locations.city'}</div>
          </span>
        < /div>)
    }
  </div>
}
export default Users;
