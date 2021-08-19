import React from 'react'
import {OneMessage} from "./OneMessage/OneMessage";
import s from './Messages.module.css'
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import {MessagesPropsType} from "./MessagesContainer";

export function Messages(props: MessagesPropsType) {
    return (
        <div className={'themeBorder themeBorderPad'}>
            <h3>Messages</h3>
            { props.messages.map( m => <OneMessage key={m.id} id={m.id} avatar={m.avatar} message={m.message} isYou={m.isYou} />)}
            <SendMessageContainer />
        </div>
    )
}