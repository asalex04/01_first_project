import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const { posts, newPostText } = props.state

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeText = (text) => {
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts updateNewPost={onChangeText} addPost={addPost}
                 posts={posts} newPostText={newPostText}
        />
    )
}

export default MyPostsContainer;
