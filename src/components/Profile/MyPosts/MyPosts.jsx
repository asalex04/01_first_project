import React from 'react';
import _ from 'lodash';
import classes from './MyPosts.module.css';
import Post from './Post/Post' ;

const ava = 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'
const MyPosts = (props) => {
  const { posts, newPostText } = props

    const onAddPost = () => {
      props.addPost()
    }

    const onChangeText = (e) => {
        const text = e.target.value;
        props.updateNewPost(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeText} value={newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {posts.map(el => <Post message={el.text} count={el.likesCount} ava={ava} key={_.uniqueId()}/>)}
            </div>
        </div>
    )
}
const PostForm = (props) => {
  return <div>
    <form>
      <div>
        <textarea />
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  </div>

}
export default MyPosts;
