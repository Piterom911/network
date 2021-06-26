import React from 'react'
import s from './Dialogs.module.css'
import {OneDialog} from "./OneDialog/OneDialog";

export function Dialogs() {
    return (
        <div className={s.wrapper}>
            <OneDialog id={1}
                       name={'Andrew'}
                       avatar="http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar3.jpg"
                       isYour={true}
                       lastMessage={'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'}
            />
            <OneDialog id={2}
                       name={'Lucy'}
                       avatar="http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar4.jpg"
                       isYour={false}
                       lastMessage={'This will be my first time hiking in the mountains!'}
            />
        </div>
    )
}