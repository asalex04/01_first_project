import React from "react";
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

class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChange = (pageNumber) => {
    const {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize);
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
