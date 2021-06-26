import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>My Posts</h3>
            <Post post={'This is my first post'} likesCount={9}/>
            <Post post={'I think this post should be longer than others and it not necessary to be interesting and be right. '} likesCount={3}/>
            <Post post={'The truth is... I am Iron Man!'} likesCount={17}/>
        </div>
    )
}