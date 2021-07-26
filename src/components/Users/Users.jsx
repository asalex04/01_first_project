import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [...Array(pageCount)].map((e, i) => i + 1)
  return <div>
    <div>
      {pages.reverse().slice(0, 9).map((p, id) => {
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
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small ? user.photos.small : userPhoto}
                     className={classes.userPhoto} alt='img'/>
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                            props.unfollow(user.id)
                          }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                            props.follow(user.id)
                          }}>Follow</button>}
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
        </div>)
      }
      </div>
}
export default Users;
