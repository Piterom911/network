import React from 'react'
import s from './OneUserCard.module.css'
import {UserType} from "../../../../redux/usersReducer";
import userIcon from '../../../../assets/images/users/userIcon4.jpg'

type PropsType = {
    background: string
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
}

export default function OneUserCard(props: UserType & PropsType) {
    const onUnfollowHandler = () => props.onUnfollow(props.id)
    const onFollowHandler = () => props.onFollow(props.id)
    return (
        <div className={s.wrapper}>
            <div className={s.card}>
                <div className={s.bgBox}>
                    { props.followed ? <button onClick={onUnfollowHandler} className={s.follow}>Unfollow</button>
                            : <button onClick={onFollowHandler} className={s.follow}>Follow</button> }
                    <img className={s.bgImg} src={props.photos.large ? props.photos.large : props.background} alt="User Background"/>
                </div>
                <div className={s.infoBox}>
                    <div className={s.privet}>
                        <div className={s.imgBox}>
                            <img className={s.userImg} src={props.photos.small ? props.photos.small : userIcon} alt="User Image"/>
                        </div>
                        <div className={s.data}>
                            <a href="#" className={s.name}>{props.name}</a>
                            <p className={s.location}>The Earth Planet</p>
                        </div>
                    </div>
                    {props.status
                        ? <div className={s.statusWrapper}><h5 className={s.status}>{props.status}</h5></div>
                        : <p className={s.noStatus}>haven't said anything yet...</p>
                    }
                </div>
            </div>
        </div>
    )
}