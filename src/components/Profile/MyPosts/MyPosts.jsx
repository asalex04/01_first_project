import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;

const MyPosts = (props) => {
    const { posts } = props
    const newPostElement = React.createRef();
    debugger
    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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