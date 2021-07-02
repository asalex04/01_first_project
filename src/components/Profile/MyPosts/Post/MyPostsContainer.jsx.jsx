import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "../MyPosts";

const MyPostsContainer = (props) => {
    const { posts, newPostText } = props.state
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeText = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts />
    )
}

export default MyPostsContainer;
