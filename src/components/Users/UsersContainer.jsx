import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             users={this.props.users}
             onPageChange={this.onPageChange}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             toggleFollowingProgress={this.props.toggleFollowingProgress}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  {follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsersThunkCreator})(UsersContainer)

