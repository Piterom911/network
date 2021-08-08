import React from 'react'
import {postTypes} from "../../../../redux/profileReducer";
import {AppStateTypes} from "../../../../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

type MapStateToPropsType = {
    posts: postTypes[]
}
type MapDispatchToPropsType = {}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer