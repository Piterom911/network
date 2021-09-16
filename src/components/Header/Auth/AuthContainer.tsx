import React from "react";
import {Auth} from "./Auth";
import axios from "axios";
import {setAuthUserData} from "../../../redux/authReducer";
import { connect } from "react-redux";
import {AppStateTypes} from "../../../redux/store";

class AuthContainer extends React.Component<MSPType & MDPType, {  }> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
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