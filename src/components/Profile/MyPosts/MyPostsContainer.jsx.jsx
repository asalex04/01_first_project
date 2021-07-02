import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeText = (text) => {
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts updateNewPost={onChangeText}
                 addPost={addPost}
                 state={props.state}/>
    )
}

export default MyPostsContainer;
