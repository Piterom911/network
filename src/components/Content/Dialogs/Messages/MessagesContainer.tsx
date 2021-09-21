import {connect} from "react-redux";
import {Messages} from "./Messages";
import {messageTypes} from "../../../../redux/dialogsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {Dispatch} from "redux";
import withAuthRedirect from "../../../../hoc/withAuthRedirect";

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

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Messages))
