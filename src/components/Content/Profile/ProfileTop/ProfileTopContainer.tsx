import React from 'react'
import {addPostAC, newPostTextAC} from "../../../../redux/profileReducer";
import {AppStateTypes} from "../../../../redux/store";
import {ProfileTop} from "./ProfileTop";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
    onPostChange: (newValue: string) => void
}
export type ProfileTopPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
    },
        onPostChange: (newPost: string) => {
            dispatch(newPostTextAC(newPost))
        }
    }
}

const ProfileTopContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileTop)
export default ProfileTopContainer