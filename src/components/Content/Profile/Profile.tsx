import React from "react"
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {StoreType} from "../../../redux/store";
import { ProfileTopContainer } from "./ProfileTop/ProfileTopContainer";

type PropsType = {
    store: StoreType
}

export function Profile(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <ProfileTopContainer store={props.store} />
            <MyPosts posts={props.store.getState().profilePage.posts} />
        </div>
    )
}