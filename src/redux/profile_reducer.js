import _ from "lodash";
import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const initialState = {
  posts: [
    {id: 0, text: 'Hi', likesCount: '12', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
    {id: 1, text: "It's my first post", likesCount: '10', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
    {id: 2, text: 'test', likesCount: '8', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
    {id: 3, text: 'second post', likesCount: '5', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
  ],
  profile: null,
  status: ""
}

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: _.uniqueId(),
        text: action.newPostBody,
        likesCount: 0,
      }
      return  {
        ...state,
        posts: [...state.posts, newPost],
      }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case DELETE_POST: {
      return {...state, posts: state.posts.filter((el) => el.id !== action.postId)}
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response))
}
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}
export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    // const mainError = response.data.messages[0]
    // const errorPlace = mainError.split('->')[1].slice(0, -1).toLowerCase()
    // dispatch(stopSubmit('edit_profile', {'contacts': {errorPlace: response.data.messages[0]}}))
    dispatch(stopSubmit('edit_profile', {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}
export default profileReducer;
