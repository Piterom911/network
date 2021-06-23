import React from "react"
import s from './Profile.module.css'
import {ProfileTop} from "./ProfileTop/ProfileTop";
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.wrapper}>
            <ProfileTop />
            <MyPosts />
        </div>
    )
}