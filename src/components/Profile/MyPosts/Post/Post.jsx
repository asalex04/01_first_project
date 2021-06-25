import React from 'react';
import classes from './MyPost.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.ava} alt=''/>
      {props.message}
      <div>
        <span>like {props.count}</span>
      </div>
    </div>
  )
}

export default Post;