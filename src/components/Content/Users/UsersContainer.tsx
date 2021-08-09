import React from 'react'
import {connect} from "react-redux";
import {AppStateTypes} from "../../../redux/store";
import Users from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../../redux/usersReducer";

type MapStateToPropsType = {
    users: UserType[]
}
export type MapDispatchToPropsType = {
    onFollow: (userID: string) => void
    onUnfollow: (userID: string) => void
    onSetUsers: (users: UserType[]) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return { users: state.usersPage.users}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onFollow: (userID: string) => dispatch(followAC(userID)),
        onUnfollow: (userID: string) => dispatch(unfollowAC(userID)),
        onSetUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer