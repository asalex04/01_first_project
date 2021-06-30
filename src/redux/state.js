import _ from 'lodash';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
     _state: {
        profilePage: {
            dialogs: [
                {id: 1, name: 'Dimych', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
                {id: 2, name: 'Andrey', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
                {id: 3, name: 'Sveta', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
                {id: 4, name: 'Sasha', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
            ],
            posts: [
                {id: 0, text: 'Hi', likesCount: '12', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
                {id: 1, text: "It's my first post", likesCount: '10', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
                {id: 2, text: 'test', likesCount: '8', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
                {id: 3, text: 'second post', likesCount: '5', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
            ],
            newPostText: '',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
                {id: 2, name: 'Andrey', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
                {id: 3, name: 'Sveta', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
                {id: 4, name: 'Sasha', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
            ],
            messages: [
                {id: 1, type: 'question', text: 'Hi'},
                {id: 2, type: 'answer', text: 'How is your it-kamasutra?'},
                {id: 3, type: 'question', text: 'Yes'},
                {id: 4, type: 'answer', text: 'Yo'},
            ],
            newMessageText: '',
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
         return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                const newPost = {
                    id: _.uniqueId(),
                    text: this._state.profilePage.newPostText,
                    likesCount: 0,
                    ava: '',
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                const newText = {
                    id: _.uniqueId(),
                    type: '',
                    text: this._state.dialogsPage.newMessageText
                }
                this._state.dialogsPage.messages.push(newText);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;

        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreator = (newMessage) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newMessage});

export default store;
window.store = store;


