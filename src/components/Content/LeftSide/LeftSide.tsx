import React from 'react'
import s from './LeftSide.module.css'
import {Widget} from "../Widget/Widget";
import {Route} from "react-router-dom";
import {Dialogs} from "../Dialogs/Dialogs";

export function LeftSide() {
    return (
        <div className={s.wrapper}>
            <Route path={'/messages'} render={ () => <Widget
                heading={'Dialogs'}
                content={<Dialogs />} /> } />
            <Widget heading={'Something'} />
        </div>
    )
}