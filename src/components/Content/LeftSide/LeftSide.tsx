import React from 'react'
import s from './LeftSide.module.css'
import {Widget} from "../Widget/Widget";
import {Route} from "react-router-dom";
import {Dialogs} from "../Dialogs/Dialogs";
import {StoreType} from "../../../redux/store";

type PropsType = {
    store: StoreType
}

export function LeftSide(props: PropsType) {
    const dialogs = props.store.getState().dialogsPage.dialogs
    return (
        <div className={s.wrapper}>
            <Route path={'/messages'} render={ () => <Widget
                heading={'Dialogs'}
                content={<Dialogs dialogs={dialogs} />} /> } />
            <Widget heading={'Something'} />
        </div>
    )
}