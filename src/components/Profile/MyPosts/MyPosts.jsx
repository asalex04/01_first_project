import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;

const MyPosts = (props) => {
    const { posts, newPostText } = props.state
    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost(newPostText);
    }

    const onChangeText = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text)
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