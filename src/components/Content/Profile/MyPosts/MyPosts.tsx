import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postTypes} from "../../../../redux/profileReducer";

type PropsType = {
    posts: postTypes[]
}

export function MyPosts(props: PropsType) {
    return (
        <div className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>My Posts</h3>
            {
                props.posts.map( p => <Post key={p.id} post={p.post} likesCount={p.likes} /> )
            }
        </div>
    )
}