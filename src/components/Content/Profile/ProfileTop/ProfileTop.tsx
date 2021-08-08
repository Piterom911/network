import React, {KeyboardEvent} from 'react'
import s from './ProfileTop.module.css'
import {ProfileTopPropsType} from "./ProfileTopContainer";

export function ProfileTop(props: ProfileTopPropsType) {

    const enteredText = React.createRef<HTMLTextAreaElement>()

    const onPostChangeHandler = () => {
        if(enteredText.current?.value || enteredText.current?.value === '') {
            if(enteredText.current.value === '\n') return
            props.onPostChange(enteredText.current.value)
        }
    }

    const onEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.shiftKey || event.ctrlKey) return
        if(event.key === 'Enter') addPostHandler()
        }

    const addPostHandler = () => {
        let value = enteredText.current?.value.trim();
        if(value && enteredText.current?.value) {
            props.addPost(value)
            enteredText.current.value = ''
        }
    }

    return (
        <div className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>Create Post</h3>
            <div className={s.main}>
                <div className={s.avatar}><img src={'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar9.jpg'} alt="avatar"/></div>
                <textarea onKeyPress={onEnterPress} onChange={onPostChangeHandler} value={props.newPostText} ref={enteredText} className={s.text} placeholder="Share some what you are thinking?"/>
            </div>
            <button onClick={addPostHandler} className={s.submit}>Post</button>
        </div>
    )
}