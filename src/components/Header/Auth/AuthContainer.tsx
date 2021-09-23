import React from "react";
import {Auth} from "./Auth";
import {getAuthUserData} from "../../../redux/auth/authReducer";
import {connect} from "react-redux";
import {AppStateTypes} from "../../../redux/store";

class AuthContainer extends React.Component<MSPType & MDPType, {  }> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Auth isAuth={this.props.isAuth}
                     email={this.props.email}
        />;
    }
}

type MSPType = {
    email: string | null
    isAuth: boolean
}

type MDPType = {
    getAuthUserData: () => void
}

const mapStateToProps = (state: AppStateTypes): MSPType => {
    return {
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserData})(AuthContainer)