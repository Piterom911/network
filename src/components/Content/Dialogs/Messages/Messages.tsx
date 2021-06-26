import React from 'react'
import {OneMessage} from "./OneMessage/OneMessage";
import s from './Messages.module.css'

export function Messages() {
    return (
        <div className={'themeBorder ' + s.wrapper}>
            <h3>Messages</h3>
            <OneMessage id={2}
                        isYou={false}
                        avatar="http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar3.jpg"
                        message={'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'}
            />
            <OneMessage id={1}
                        isYou={true}
                        avatar="http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar8.jpg"
                        message={'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'}
            />
        </div>
    )
}