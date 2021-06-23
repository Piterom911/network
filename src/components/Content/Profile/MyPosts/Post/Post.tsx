import React from 'react'
import s from './Post.module.css'
import avatar from '../../../../../images/portfolioWork.jpg'

type PostPropsType = {
    post: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div className={s.avatar}><img src={avatar} alt="avatar"/></div>
                <p className={s.post}>{props.post}</p>
                <span className={s.likes}>likes({props.likesCount})</span>
            </div>

        </div>
    )
}