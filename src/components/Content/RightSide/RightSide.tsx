import React from 'react'
import s from './RightSide.module.css'
import {Widget} from "../Widget/Widget";

export function RightSide() {
    return (
        <div className={s.wrapper}>
            <Widget />
            <Widget />
            <Widget />
        </div>
    )
}