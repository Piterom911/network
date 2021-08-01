import React from 'react'
import s from './ProfileTop.module.css'
import {addPostAC, newPostTextAC} from "../../../../redux/profileReducer";
import {actionsTypes} from "../../../../redux/store";

type addPostTypes = {
    newPostText: string
    dispatch: (action: actionsTypes) => void
}

export function ProfileTop(props: addPostTypes) {

    const enteredText = React.createRef<HTMLTextAreaElement>()

    const onPostChangeHandler = () => {
        if(enteredText.current?.value || enteredText.current?.value === '') props.dispatch(newPostTextAC(enteredText.current.value))
    }

    const addPostHandler = () => {
        let value = enteredText.current?.value.trim();
        if(value && enteredText.current?.value) {
            props.dispatch(addPostAC(value))
            enteredText.current.value = ''
        }
    }

    return (
        <div className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>Create Post</h3>
            <div className={s.main}>
                <div className={s.avatar}><img src={'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar9.jpg'} alt="avatar"/></div>
                <textarea onChange={onPostChangeHandler} value={props.newPostText} ref={enteredText} className={s.text} placeholder="Share some what you are thinking?"/>
            </div>
            <button onClick={addPostHandler} className={s.submit}>Post</button>
        </div>
    )
}