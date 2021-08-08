import React from 'react'
import s from './Dialogs.module.css'
import {OneDialog} from "./OneDialog/OneDialog";
import {dialogTypes} from "../../../redux/dialogsReducer";
import {AppStateTypes} from "../../../redux/store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";

// export function Dialogs(props: dialogsType) {
//     return (
//         <div className={s.wrapper}>
//             {props.dialogs.map( d => <OneDialog id={d.id}
//                                                 avatar={d.avatar}
//                                                 name={d.name}
//                                                 isYour={d.isYour}
//                                                 lastMessage={d.lastMessage}
//                                                 key={d.id}
//             /> )}
//         </div>
//     )
// }

type MapStateToPropsType = {
    dialogs: dialogTypes[]
}
type MapDispatchToPropsType = {

}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer