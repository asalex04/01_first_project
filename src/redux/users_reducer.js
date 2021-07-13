import _ from "lodash";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSER = 'SETUSER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 100,
  currentPage: 1,
}

const usersReducer = (state=initialState, action) => {

  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId)
            return {...user, followed: !user.followed}
          return user
        })
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount}
    }
    case SETUSER: {
      return {...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    default:
      return state;
  }
}


export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUserAC = (users) => ({type: SETUSER, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer;
