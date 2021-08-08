import {getAuthUserData} from "./auth_reducer";

export type InitialStateType = {
  initialized: boolean
}
type InitializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState: InitialStateType = {
  initialized: false,
}

const appReducer = (state=initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state;
  }
}

export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData())
  promise.then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer;
