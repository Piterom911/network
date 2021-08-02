import React from 'react'
import {Profile} from './Profile/Profile';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import {Messages} from "./Dialogs/Messages/Messages";
import { Route } from 'react-router-dom';
import {StoreType} from "../../redux/store";

type PropsType = {
    store: StoreType
}

export function Content(props: PropsType) {
    const dialogsPage = props.store.getState().dialogsPage
    return (
        <div className={s.wrapper}>
            <LeftSide store={props.store} />
            <div className={s.inner}>
                <Route path={'/profile'} render={ () => <Profile store={props.store} /> } />
                <Route path={'/messages'} render={ () => <Messages store={props.store}
                                                                   newMessage={dialogsPage.newMessage}
                                                                   messages={dialogsPage.messages} /> } />
            </div>

            <RightSide />
        </div>
    )
}