import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state=initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    }
    default:
      return state;
  }
}

export const seAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} });
export const getAuthUserData = () => {
  return (dispatch) => {
    usersAPI.getAuth()
      .then(response => {
        const {id, login, email} = response.data
        dispatch(seAuthUserData(id, email, login))
      })
  }
}

export default authReducer;
