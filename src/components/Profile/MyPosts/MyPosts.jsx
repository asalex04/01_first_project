import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    const { posts, newPostText } = props.state
    const newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangeText = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeText} ref={newPostElement}
                          value={newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts.map(el => <Post message={el.text} count={el.likesCount} ava={el.ava}/>)}
            </div>
        </div>
    )
}

export default MyPosts;
