import React from 'react';
import classes from './MyPost.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg' alt=''/>
      {props.message}
      <div>
        <span>like {props.count}</span>
      </div>
    </div>
  )
}

export default Post;