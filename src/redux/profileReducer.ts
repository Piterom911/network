import {profilePageTypes} from "./state";
import {v1} from "uuid";

function profileReducer(state: profilePageTypes, action: any): profilePageTypes {
    switch (action.type) {
        case 'NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        case 'ADD-POST':
            state.posts.unshift({id: v1(), likes: 0, post: action.post})
            state.newPostText = '';
            return state
        default:
            return state
    }
}

export default profileReducer