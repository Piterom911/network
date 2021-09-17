import React from "react";
import {Auth} from "./Auth";
import {setAuthUserData} from "../../../redux/authReducer";
import { connect } from "react-redux";
import {AppStateTypes} from "../../../redux/store";
import {authAPI} from "../../../apis/api";

class AuthContainer extends React.Component<MSPType & MDPType, {  }> {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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
    setAuthUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppStateTypes): MSPType => {
    return {
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(AuthContainer)