import _ from 'lodash';

let state = {
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
    messagesPage: {
        messages: [
            {id: 1, type: 'question', text: 'Hi'},
            {id: 2, type: 'answer', text: 'How is your it-kamasutra?'},
            {id: 3, type: 'question', text: 'Yes'},
            {id: 4, type: 'answer', text: 'Yo'},
        ],
    },
    sidebar: {}
};
window.state = state;

let rerenderEntireTree = () => {
    console.log('state was changed')
}

export const addPost = (postMessage) => {
    const newPost = {
        id: _.uniqueId(),
        text: postMessage,
        likesCount: 0,
        ava: '',
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;