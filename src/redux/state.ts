import {v1} from "uuid";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

export type postTypes = {
    id: string
    likes: number
    post: string
}

export type dialogTypes = {
    id: string
    name: string
    avatar: string
    isYour: boolean
    lastMessage: string
}

export type messageTypes = {
    id: string
    isYou: boolean
    avatar: string
    message: string
}

export type onlineFriendTypes = {
    id: string
    avatar: string
    name: string
}

export type profilePageTypes = {
    posts: Array<postTypes>
    newPostText: string
}

export type dialogsPageTypes = {
    dialogs: Array<dialogTypes>
    messages: Array<messageTypes>
    newMessage: string
}

export type rightSidebarTypes = {
    onlineFriends: onlineFriendTypes[]
}

export type stateTypes = {
    profilePage: profilePageTypes
    dialogsPage: dialogsPageTypes
    rightSidebar: rightSidebarTypes
}

export type storeTypes = {
    _state: stateTypes
    _callSubscribers: () => void
    newPostTextChange: (newPostText: string) => void
    addPost: (post: string) => void
    subscribe: (observer: () => void) => void
    getState: () => stateTypes
    dispatch: (action: actionsTypes) => void
}

export type actionsTypes = newPostTextActionType
    | addPostActionType
    | newMessageTextActionType
    | addMessageActionType

type newPostTextActionType = ReturnType<typeof newPostTextAC>
type addPostActionType = ReturnType<typeof addPostAC>
type newMessageTextActionType = ReturnType<typeof newMessageTextAC>
type addMessageActionType = ReturnType<typeof addMessageAC>

let store: storeTypes = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {
                    id: v1(),
                    name: 'Andrew',
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar3.jpg',
                    isYour: true,
                    lastMessage: 'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'
                },
                {
                    id: v1(),
                    name: 'Lucy',
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar4.jpg',
                    isYour: false,
                    lastMessage: 'This will be my first time hiking in the mountains!'
                },
            ],
            messages: [
                {
                    id: v1(),
                    isYou: false,
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar3.jpg',
                    message: 'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'
                },
                {
                    id: v1(),
                    isYou: true,
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar8.jpg',
                    message: 'Ha ha! You should be kidding me?!!!'
                },
            ],
            newMessage: ''
        },
        rightSidebar: {
            onlineFriends: [
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend1.jpg',
                    name: 'Morgan Freeman'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend2.jpg',
                    name: 'Jackie Chan'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend3.jpg',
                    name: 'Bruce Willis'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend4.jpg',
                    name: 'Jennifer Lawrence'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend5.jpg',
                    name: 'Julia Roberts'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend6.jpg',
                    name: 'Jennifer Aniston'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend7.jpg',
                    name: 'Will Smith'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend8.jpg',
                    name: 'Angelina Jolie'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend9.jpg',
                    name: 'Bruce Willis'
                },
                {
                    id: v1(),
                    avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend10.jpg',
                    name: 'Scarlett Johansson'
                },
            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscribers() {
        return
    },

    newPostTextChange(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscribers()
    },

    addPost (post: string) {
        this._state.profilePage.posts.unshift({id: v1(), likes: 0, post})
        this._state.profilePage.newPostText = '';
        this._callSubscribers()
    },

    subscribe (observer) {
        this._callSubscribers = observer
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        messagesReducer(this._state.dialogsPage, action)
        this._callSubscribers()
    }
}

export const newPostTextAC = (newPostText: string) => {
    return {type: 'NEW-POST-TEXT', newPostText} as const
}

export const addPostAC = (post: string) => {
    return {type: 'ADD-POST', post} as const
}

export const newMessageTextAC = (newMessageText: string) => {
    return {type: 'NEW-MESSAGE-TEXT', newMessageText} as const
}

export const addMessageAC = (message: string) => {
    return {type: 'ADD-MESSAGE', message} as const
}




export default store