import React from 'react'
import {addPostAC, newPostTextAC} from "../../../../redux/profileReducer";
import {StoreType} from "../../../../redux/store";
import {ProfileTop} from "./ProfileTop";

export function ProfileTopContainer(props: { store: StoreType }) {
    const state = props.store.getState()

    const onPostChangeHandler = (newValue: string) => {
        props.store.dispatch(newPostTextAC(newValue))
    }

    const addPostHandler = (newPost: string) => {
            props.store.dispatch(addPostAC(newPost))
    }

    return ( <ProfileTop newPostText={state.profilePage.newPostText} addPost={addPostHandler} onPostChange={onPostChangeHandler} /> )
}