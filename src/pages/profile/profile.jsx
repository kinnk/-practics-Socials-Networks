import React from 'react';
// style
import style from './profile.module.scss';
//components
import Post from '../../components/profile/posts/Post';
import NewPost from '../../components/profile/posts/NewPost';
import UserProfile from '../../components/profile/UserProfile/UserProfile';




const Profile = (props) => {
    return (
        <div className = {style.profile}>
            <div className={style.UserProfile}>
                <UserProfile userProfile = {props.userProfile}/>
            </div>
            <div className={style.post}>
                <NewPost/>
                <Post posts = {props.posts}/>
            </div>
        </div>
    )
}

export default Profile;