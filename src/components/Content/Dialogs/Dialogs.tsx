import React from 'react'
import s from './Dialogs.module.css'
import {OneDialog} from "./OneDialog/OneDialog";
import {dialogTypes} from "../../../state";

type dialogsType = {
    dialogs: dialogTypes[]
}

export function Dialogs(props: dialogsType) {
    return (
        <div className={s.wrapper}>
            {props.dialogs.map( d => <OneDialog id={d.id}
                                                avatar={d.avatar}
                                                name={d.name}
                                                isYour={d.isYour}
                                                lastMessage={d.lastMessage}
                                                key={d.id}
            /> )}
        </div>
    )
}