import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";

export function Content() {
    return (
        <div className={s.wrapper}>
            <LeftSide />
            <Profile />
            <RightSide />
        </div>
    )
}