import React from 'react'
import s from "./Users.module.css";
import OneUserCard from "./OneUserCard/OneUserCard";
import {UsersPropsType} from "./UsersContainer";

export default function Users(props: UsersPropsType) {
    return (
        <div className={s.contentCenter}>
            <div className={`${s.wrapper} themeBorder`}>
                <h3>People Page</h3>
                <div className={s.usersWrapper}>
                    {props.users.map(u => <OneUserCard id={u.id}
                                                       onFollow={props.onFollow}
                                                       onUnfollow={props.onUnfollow}
                                                       onSetUsers={props.onSetUsers}
                                                       location={u.location}
                                                       background={u.background}
                                                       name={u.name}
                                                       isFollowed={u.isFollowed}
                                                       image={u.image}
                                                       status={u.status}
                                                       key={u.id}/>)}
                </div>
            </div>
        </div>
    )
}