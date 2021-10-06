import React from "react";
import userAvatar from "../../../assets/images/users/userIcon4.jpg"
import s from "./Auth.module.css"
import {Redirect} from "react-router-dom";
import {Login} from "../../Content/Login/Login";

type AuthPropsType = {
    email: string | null
    isAuth: boolean
    photo: string
    logOut: () => void
}

export const Auth = (props: AuthPropsType) => {

     return (
        <div>
            {props.isAuth
                ? <div className={s.imIn}>
                    <div className={s.ava} >
                        <img src={props.photo ? props.photo : userAvatar} alt="avatar"/>
                    </div>
                    <div>
                        <h6>{props.email}</h6>
                        <button onClick={props.logOut} className={s.logout}>Log out</button>
                    </div>
                </div>
                : <button className={s.logout}>log in</button>}
        </div>
    )
}