import {connect} from "react-redux";
import {Messages} from "./Messages";
import {messageTypes} from "../../../../redux/dialogsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    messages: messageTypes[]
}
type mapDispatchToPropsType = {

}
export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): mapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer