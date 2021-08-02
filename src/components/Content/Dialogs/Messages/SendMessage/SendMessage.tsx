import React, {ChangeEvent, KeyboardEvent} from 'react'
import IconSend from '../../../../../icons/IconSend'
import s from './SendMessage.module.css'

type SendMessagePropsType = {
    onMessageSend: () => void
    onMessageChange: (value: string) => void
    newMessage: string
}

export function SendMessage(props: SendMessagePropsType) {

    const onMessageSend = () => {
        props.onMessageSend()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value === '\n') return
        props.onMessageChange(e.currentTarget.value)
    }

    const onEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (!e.shiftKey && !e.ctrlKey && e.key === 'Enter') {
            onMessageSend()
        }
    }

    return (
        <div className={s.wrapper}>
            <textarea value={props.newMessage}
                      onKeyPress={onEnterPress}
                      onChange={onMessageChange}
                      className={s.textarea}
                      placeholder="Write your message here..." />
            <div className={s.send} onClick={onMessageSend}>
                <IconSend />
            </div>
        </div>
    )
}
