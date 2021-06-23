import React from 'react'
import avatar from '../../../../images/portfolioWork.jpg'
import s from './ProfileTop.module.css'

export function ProfileTop() {
    return (
        <div className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>Create Post</h3>
            <div className={s.main}>
                <div className={s.avatar}><img src={avatar} alt="avatar"/></div>
                <textarea className={s.text} placeholder="Share some what you are thinking?"/>
            </div>
            <button className={s.submit}>Post</button>
        </div>
    )
}