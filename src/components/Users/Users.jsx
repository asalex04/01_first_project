import React from "react";
import * as axios from "axios";
import classes from "./Users.module.css";
import userPhoto from '../../../src/assets/images/user.png';

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [...Array(pageCount)].map((e, i) => i + 1)
    return <div>
      <div>
        {pages.slice(0, 9).map((p, id) => {
          return <span className={this.props.currentPage === p ? classes.selectPage : ''} key={id}
          onClick={(e) => {this.onPageChange(p) }}>{p}</span>
        })}
        ...
      </div>
      {
        this.props.users.map(user => <div key={user.id}>
          <span>
            <div className={classes.item}>
              <img src={user.photos.small ? user.photos.small : userPhoto}/>
            </div>
            <div>
              {user.followed
                ? <button onClick={() => this.props.follow(user.id) }>Unfollow</button>
                : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
}

export default Users;
