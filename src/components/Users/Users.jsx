import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [...Array(pageCount)].map((e, i) => i + 1)
  return <div>
    <div>
      {pages.slice(0, 9).map((p, id) => {
        return <span className={props.currentPage === p ? classes.selectPage : ''} key={id}
                     onClick={(e) => {
                       props.onPageChange(p)
                     }}>{p}</span>
      })}
      ...
    </div>
    {
      props.users.map(user => <div key={user.id}>
          <span>
            <div className={classes.item}>
              <img src={user.photos.small ? user.photos.small : userPhoto}/>
            </div>
            <div>
              {user.followed
                ? <button onClick={() => props.follow(user.id)}>Unfollow</button>
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
