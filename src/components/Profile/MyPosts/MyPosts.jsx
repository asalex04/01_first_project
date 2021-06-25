import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;

const MyPosts = (props) => {
    const { posts } = props
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts.map(el => <Post message={el.text} count={el.likesCount} />)}
            </div>
        </div>
    )
}

export default MyPosts;