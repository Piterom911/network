import React from 'react'
import s from './LeftSide.module.css'
import {Widget} from "../Widget/Widget";

export function LeftSide() {
    return (
        <div className={s.wrapper}>
            <Widget />
        </div>
    )
}