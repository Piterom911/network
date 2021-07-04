import React from "react"
import s from './Profile.module.css'
import {ProfileTop} from "./ProfileTop/ProfileTop";
import {MyPosts} from "./MyPosts/MyPosts";
import {postTypes} from "../../../state";

type PropsType = {
    posts: postTypes[]
}

export function Profile(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileTop />
            <MyPosts posts={props.posts} />
        </div>
    )
}