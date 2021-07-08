import _ from "lodash";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSER = 'SETUSER';

const initialState = {
  users: [],
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
    // case UNFOLLOW: {
    //   return {
    //     ...state,
    //     users: state.users.map((user) => {
    //       if (user.id === action.userId)
    //         return {...user, unfollowed: !user.unfollowed}
    //       return user
    //     })
    //   }
    // }
    case SETUSER: {
      return {...state, users: [ ...state.users, ...action.users ]}
    }
    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUserAC = (users) => ({type: SETUSER, users});

export default usersReducer;
