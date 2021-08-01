import {dialogsPageTypes} from "./state";
import {v1} from "uuid";

function messagesReducer(state: dialogsPageTypes, action: any): dialogsPageTypes {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            state.newMessage = action.newMessageText
            return state
        case 'ADD-MESSAGE':
            state.messages.push({
                id: v1(),
                isYou: true,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar8.jpg',
                message: action.message
            })
            state.newMessage = ''
            return state
        default:
            return state
    }
}

export default messagesReducer