import React from "react"
import PostTopContainer from "./PostTop/PostTopContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

function Posts() {
    return (
        <div className={`innerWrapper`}>
            <PostTopContainer />
            <MyPostsContainer />
        </div>
    )
}

export default withAuthRedirect(Posts)