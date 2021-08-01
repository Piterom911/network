import React from 'react'
import {OneMessage} from "./OneMessage/OneMessage";
import s from './Messages.module.css'
import {SendMessage} from "./SendMessage/SendMessage";
import {messageTypes} from "../../../../redux/dialogsReducer";
import {actionsTypes} from "../../../../redux/store";

type messagesTypes = {
    newMessage: string
    messages: messageTypes[]
    dispatch: (action: actionsTypes) => void
}

export function Messages(props: messagesTypes) {
    return (
        <div className={'themeBorder ' + s.wrapper}>
            <h3>Messages</h3>
            { props.messages.map( m => <OneMessage key={m.id} id={m.id} avatar={m.avatar} message={m.message} isYou={m.isYou} />)}
            <SendMessage newMessage={props.newMessage} dispatch={props.dispatch} />
        </div>
    )
}