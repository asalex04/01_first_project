import _ from "lodash";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts: [
    {id: 0, text: 'Hi', likesCount: '12', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
    {id: 1, text: "It's my first post", likesCount: '10', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
    {id: 2, text: 'test', likesCount: '8', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
    {id: 3, text: 'second post', likesCount: '5', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
  ],
  newPostText: '',
  profile: null,
}

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: _.uniqueId(),
        text: state.newPostText,
        likesCount: 0,
        ava: '',
      }
      return  {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      }
    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.newText}
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
