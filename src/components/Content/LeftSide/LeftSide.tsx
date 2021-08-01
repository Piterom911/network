import React from 'react'
import s from './LeftSide.module.css'
import {Widget} from "../Widget/Widget";
import {Route} from "react-router-dom";
import {Dialogs} from "../Dialogs/Dialogs";
import { dialogTypes } from '../../../redux/state';

type dialogsType = {
    dialogs: dialogTypes[]
}

export function LeftSide(props: dialogsType) {
    return (
        <div className={s.wrapper}>
            <Route path={'/messages'} render={ () => <Widget
                heading={'Dialogs'}
                content={<Dialogs dialogs={props.dialogs} />} /> } />
            <Widget heading={'Something'} />
        </div>
    )
}