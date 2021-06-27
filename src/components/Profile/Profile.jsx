import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    const { posts } = props
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;