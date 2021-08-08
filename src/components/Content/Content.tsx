import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import { Route } from 'react-router-dom';
import {StoreType} from "../../redux/store";
import MessagesContainer from "./Dialogs/Messages/MessagesContainer";

type PropsType = {
    store: StoreType
}

export function Content(props: PropsType) {
    return (
        <div className={s.wrapper}>
            <LeftSide />
            <div className={s.inner}>
                <Route path={'/profile'} render={ () => <Profile /> } />
                <Route path={'/messages'} render={ () => <MessagesContainer /> } />
            </div>

            <RightSide />
        </div>
    )
}