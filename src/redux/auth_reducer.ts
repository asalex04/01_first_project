import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type InitialStateType = typeof initialState

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
}

const authReducer = (state=initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state;
  }
}

type SetAuthUserDataPayloadType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
}

type SetAuthUserDataType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataPayloadType
}

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} });

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean):
    SetAuthUserDataType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null,null,null,false))
    }
}

export default authReducer;
