import {v1} from "uuid";

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
export type dialogsPageTypes = {
    dialogs: Array<dialogTypes>
    messages: Array<messageTypes>
    newMessage: string
}

export type newMessageTextActionType = ReturnType<typeof newMessageTextAC>
export type addMessageActionType = ReturnType<typeof addMessageAC>

export type dialogsActions = newMessageTextActionType | addMessageActionType

const initialState: dialogsPageTypes = {
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
}

function dialogsReducer(state: dialogsPageTypes = initialState, action: dialogsActions): dialogsPageTypes {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            return {...state, newMessage: action.newMessageText}
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: v1(),
                        isYou: true,
                        avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar8.jpg',
                        message: action.message
                    }
                ],
                newMessage: ''
            }
        default:
            return state
    }
}

export const newMessageTextAC = (newMessageText: string) => {
    return {type: 'NEW-MESSAGE-TEXT', newMessageText} as const
}
export const addMessageAC = (message: string) => {
    return {type: 'ADD-MESSAGE', message} as const
}

export default dialogsReducer