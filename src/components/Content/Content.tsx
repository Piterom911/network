import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import {Messages} from "./Dialogs/Messages/Messages";
import { Route } from 'react-router-dom';

export function Content() {
    return (
        <div className={s.wrapper}>
            <LeftSide />
            <div className={s.inner}>
                <Route path={'/profile'} render={ () => <Profile /> } />
                <Route path={'/messages'} render={ () => <Messages /> } />
            </div>

            <RightSide />
        </div>
    )
}