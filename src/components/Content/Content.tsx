import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import {Messages} from "./Dialogs/Messages/Messages";
import { Route } from 'react-router-dom';
import {stateTypes} from "../../state";

type PropsType = {
    state: stateTypes
}

export function Content(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <LeftSide dialogs={props.state.dialogsPage.dialogs} />
            <div className={s.inner}>
                <Route path={'/profile'} render={ () => <Profile posts={props.state.profilePage.posts} /> } />
                <Route path={'/messages'} render={ () => <Messages messages={props.state.dialogsPage.messages} /> } />
            </div>

            <RightSide />
        </div>
    )
}