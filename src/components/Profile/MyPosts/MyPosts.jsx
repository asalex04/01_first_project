import React from 'react';
import _ from 'lodash';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;
import {Field, reduxForm} from "redux-form";

const ava = 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'
const MyPosts = (props) => {
    const addNewPost = (values) => {
      props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {props.posts.map(el => <Post message={el.text} count={el.likesCount} ava={ava} key={_.uniqueId()}/>)}
            </div>
        </div>
    )
}
const AddPostForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newPostBody'}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  </div>
}
const AddPostFormRedux = reduxForm({form: 'addNewPostForm'})(AddPostForm)
export default MyPosts;
