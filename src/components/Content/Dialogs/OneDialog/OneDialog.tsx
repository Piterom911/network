import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './OneDialog.module.css'

type OneDialogPropsType = {
    id: number
    name: string
    avatar: string
    lastMessage: string
    isYour: boolean
}

export function OneDialog(props: OneDialogPropsType) {

    const path = '/messages/' + props.id

    return (
        <NavLink to={path} className={s.wrapper} activeClassName={s.active}>
            <img src={props.avatar} alt={props.name} className={s.avatar}/>
            <div className={s.info}>
                <p className={s.name}>{props.name}</p>
                <p className={s.text}>
                    {props.isYour ? <span className={s.from}>You: </span> : null }
                    {props.lastMessage}
                </p>
            </div>
        </NavLink>
    )
}