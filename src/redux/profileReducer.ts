import {v1} from "uuid";

export type postTypes = {
    id: string
    likes: number
    post: string
}
export type profilePageTypes = {
    posts: Array<postTypes>
    newPostText: string
}

export type newPostTextActionType = ReturnType<typeof newPostTextAC>
export type addPostActionType = ReturnType<typeof addPostAC>

export type profileActions = newPostTextActionType | addPostActionType

const initialState = {
    posts: [
        {id: v1(), likes: 8, post: 'This is my first post'},
        {
            id: v1(),
            likes: 3,
            post: 'I think this post should be longer than others and it not necessary to be interesting and be right.'
        },
        {id: v1(), likes: 17, post: 'The truth is... I am Iron Man!'}
    ],
    newPostText: ''
}

function profileReducer(state: profilePageTypes = initialState, action: profileActions): profilePageTypes {
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

export const newPostTextAC = (newPostText: string) => {
    return {type: 'NEW-POST-TEXT', newPostText} as const
}
export const addPostAC = (post: string) => {
    return {type: 'ADD-POST', post} as const
}

export default profileReducer