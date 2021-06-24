import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;

const MyPosts = () => {
    let postData = [
        {id: 1, text: 'Hi', likesCount: '12'},
        {id: 2, text: "It's my first post", likesCount: '10'},
        {id: 2, text: 'test', likesCount: '8'},
        {id: 2, text: 'second post', likesCount: '5'},
    ]
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
                {postData.map(el => <Post message={el.text} count={el.likesCount} />)}
            </div>
        </div>
    )
}

export default MyPosts;