import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import {Messages} from "./Dialogs/Messages/Messages";
import { Route } from 'react-router-dom';
import {actionsTypes, stateTypes} from "../../redux/store";

type PropsType = {
    state: stateTypes
    dispatch: (action: actionsTypes) => void
}

export function Content(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <LeftSide dialogs={props.state.dialogsPage.dialogs} />
            <div className={s.inner}>
                <Route path={'/profile'} render={ () => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage} /> } />
                <Route path={'/messages'} render={ () => <Messages dispatch={props.dispatch}
                                                                   newMessage={props.state.dialogsPage.newMessage}
                                                                   messages={props.state.dialogsPage.messages} /> } />
            </div>

            <RightSide />
        </div>
    )
}