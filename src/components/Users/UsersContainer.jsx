import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {follow, requestUsers, setCurrentPage, unfollow, toggleFollowingProgress
        } from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
  getUser,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount
} from "../../redux/users_selectors";

const UsersContainer = (props) => {
  useEffect(() => {
    const {currentPage, pageSize} = props
    props.getUsers(currentPage, pageSize)
  }, [])

  const onPageChange = (pageNumber) => {
    const {pageSize} = props
    props.getUsers(pageNumber, pageSize);
  }

    return <>
      {props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={props.totalUsersCount}
             pageSize={props.pageSize}
             currentPage={props.currentPage}
             users={props.users}
             onPageChange={onPageChange}
             follow={props.follow}
             unfollow={props.unfollow}
             toggleFollowingProgress={props.toggleFollowingProgress}
             followingInProgress={props.followingInProgress}
      />
    </>
}

const mapStateToProps = (state) => {
  return {
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer)
