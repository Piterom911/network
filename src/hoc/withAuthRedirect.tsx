import React from "react";
import {AppStateTypes} from "../redux/store";
import {connect} from "react-redux";
import {Login} from "../components/Content/Login/Login";

type MSTPType = {
    isAuth: boolean
}

const MapStateToProps = (state: AppStateTypes): MSTPType => {
    return { isAuth: state.auth.isAuth }
}

function withAuthRedirect <T>(Component: React.ComponentType<T>) {
    class ComponentContainer extends React.Component<MSTPType, {}> {
        render() {
            const {isAuth, ...restProps} = this.props
            if (!isAuth) return <Login />
            return <Component {...restProps as T} />
        }
    }

    return connect(MapStateToProps)(ComponentContainer)
}

export default withAuthRedirect