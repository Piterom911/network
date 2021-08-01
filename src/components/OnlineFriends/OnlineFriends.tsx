import React from 'react'
import s from './OnlineFriends.module.css'
import OnlineFriend from "./OnlineFriend/OnlineFriend";
import {onlineFriendTypes} from "../../redux/state";

type friendsTypes = {
    friends: onlineFriendTypes[]
}

export function OnlineFriends(props: friendsTypes) {
    return (
        <div className={s.sidebar}>
            {props.friends.map( (f: any) => <OnlineFriend key={f.id} name={f.name} avatar={f.avatar} /> )}
        </div>
    )
}