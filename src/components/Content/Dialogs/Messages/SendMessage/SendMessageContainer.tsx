import React from 'react'
import {addMessageAC, newMessageTextAC} from "../../../../../redux/dialogsReducer";
import {StoreType} from "../../../../../redux/store";
import {SendMessage} from "./SendMessage";

type SendMessagePropsType = {
    store: StoreType
}

export function SendMessageContainer(props: SendMessagePropsType) {

    const newMessage = props.store.getState().dialogsPage.newMessage

    const onMessageSend = () => {
        if (!newMessage.trim())  {
            props.store.dispatch(newMessageTextAC(''))
            return
        }
        props.store.dispatch(addMessageAC(newMessage.trim()))
    }

    const onMessageChange = (value: string) => {
        props.store.dispatch(newMessageTextAC(value))
    }

    return ( <SendMessage newMessage={newMessage} onMessageSend={onMessageSend} onMessageChange={onMessageChange} /> )
}
