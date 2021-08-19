import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import {Route} from 'react-router-dom';
import MessagesContainer from "./Dialogs/Messages/MessagesContainer";

export function Content() {
    return (
        <div className={s.wrapper}>
            <Route path={['/profile', '/messages']} render={ () => <LeftSide /> } />
            <div className={`innerCenter`}>
                <Route path={'/profile'} render={ () => <Profile /> } />
                <Route path={'/messages'} render={ () => <MessagesContainer /> } />
            </div>

            <Route path={['/profile', '/messages']} render={ () => <RightSide /> } />
        </div>
    )
}