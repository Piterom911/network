import {addMessageAC, newMessageTextAC} from "../../../../../redux/dialogsReducer";
import {AppStateTypes} from "../../../../../redux/store";
import {SendMessage} from "./SendMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type SendMessagePropsType = {
//     store: StoreType
// }

// export function SendMessageContainer1(props: SendMessagePropsType) {
//
//     const newMessage = props.store.getState().dialogsPage.newMessage
//
//     const onMessageSend = () => {
//         if (!newMessage.trim())  {
//             props.store.dispatch(newMessageTextAC(''))
//             return
//         }
//         props.store.dispatch(addMessageAC(newMessage.trim()))
//     }
//
//     const onMessageChange = (value: string) => {
//         props.store.dispatch(newMessageTextAC(value))
//     }
//
//     return ( <SendMessage newMessage={newMessage} onMessageSend={onMessageSend} onMessageChange={onMessageChange} /> )
// }

export type SendMessagePropsType2 = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    newMessage: string
}

type MapDispatchToPropsType = {
    onMessageSend: (newMessage: string) => void
    onMessageChange: (value: string) => void
}

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        newMessage: state.dialogsPage.newMessage
    }
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onMessageSend: (newMessage: string) => {
            if (!newMessage.trim())  {
                dispatch(newMessageTextAC(''))
                return
            }
            dispatch(addMessageAC(newMessage.trim()))
        },
        onMessageChange: (value: string) => {
            dispatch(newMessageTextAC(value))
        }
    }
}

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage)
export default SendMessageContainer
