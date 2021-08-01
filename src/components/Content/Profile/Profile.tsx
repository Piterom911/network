import React from "react"
import s from './Profile.module.css'
import {ProfileTop} from "./ProfileTop/ProfileTop";
import {MyPosts} from "./MyPosts/MyPosts";
import {actionsTypes, profilePageTypes} from "../../../redux/state";

type PropsType = {
    profilePage: profilePageTypes
    dispatch: (action: actionsTypes) => void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileTop dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
            <MyPosts posts={props.profilePage.posts} />
        </div>
    )
}