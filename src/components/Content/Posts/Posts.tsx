import React from "react"
import PostTopContainer from "./PostTop/PostTopContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export function Posts() {
    return (
        <div className={`innerWrapper`}>
            <PostTopContainer />
            <MyPostsContainer />
        </div>
    )
}