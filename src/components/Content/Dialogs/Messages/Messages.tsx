import React from 'react'
import {OneMessage} from "./OneMessage/OneMessage";
import s from './Messages.module.css'
import {messageTypes} from "../../../../redux/dialogsReducer";
import {StoreType} from "../../../../redux/store";
import {SendMessageContainer} from "./SendMessage/SendMessageContainer";

type messagesTypes = {
    newMessage: string
    messages: messageTypes[]
    store: StoreType
}

export function Messages(props: messagesTypes) {
    return (
        <div className={'themeBorder ' + s.wrapper}>
            <h3>Messages</h3>
            { props.messages.map( m => <OneMessage key={m.id} id={m.id} avatar={m.avatar} message={m.message} isYou={m.isYou} />)}
            <SendMessageContainer store={props.store} />
        </div>
    )
}