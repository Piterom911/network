import React from 'react'
import {OneMessage} from "./OneMessage/OneMessage";
import s from './Messages.module.css'
import {messageTypes} from "../../../../state";

type messagesTypes = {
    messages: messageTypes[]
}

export function Messages(props: messagesTypes) {
    return (
        <div className={'themeBorder ' + s.wrapper}>
            <h3>Messages</h3>
            { props.messages.map( m => <OneMessage key={m.id} id={m.id} avatar={m.avatar} message={m.message} isYou={m.isYou} />)}
        </div>
    )
}