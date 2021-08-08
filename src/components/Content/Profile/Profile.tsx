import React from "react"
import s from './Profile.module.css'
import ProfileTopContainer from "./ProfileTop/ProfileTopContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export function Profile() {
    return (
        <div className={s.wrapper}>
            <ProfileTopContainer />
            <MyPostsContainer />
        </div>
    )
}