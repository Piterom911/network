import React from "react";
import User from "./User";
import {connect} from "react-redux";
import {getProfile, ProfilePageTypes} from "../../../../redux/profileReducer";
import {AppStateTypes} from "../../../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userID: string,
}

export type PropsType = RouteComponentProps<PathParamsType> & ProfilePageTypes & MDTPType

export class UserAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        const userID = this.props.match.params.userID
        this.props.getProfile(+userID)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        const userID = this.props.match.params.userID
        if (prevProps.match.params.userID === userID) return
        this.props.getProfile(+userID)
    }

    render() {
        return <User {...this.props} />
    }
}

export type MDTPType = {
    getProfile: (userID: number) => void
}

const mapStateToProps = (state: AppStateTypes): ProfilePageTypes => {
    return {
        userId: state.profilePage.userId,
        aboutMe: state.profilePage.aboutMe,
        lookingForAJob: state.profilePage.lookingForAJob,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
        fullName: state.profilePage.fullName,
        contacts: {
            github: state.profilePage.contacts.github,
            vk: state.profilePage.contacts.vk,
            facebook: state.profilePage.contacts.facebook,
            instagram: state.profilePage.contacts.instagram,
            twitter: state.profilePage.contacts.twitter,
            website: state.profilePage.contacts.website,
            youtube: state.profilePage.contacts.youtube,
            mainLink: state.profilePage.contacts.mainLink
        },
        photos: {
            small: state.profilePage.photos.small,
            large: state.profilePage.photos.large
        },
        isFetching: state.profilePage.isFetching
    }
}

const UserWithRouter = withRouter(UserAPI)

export default connect(mapStateToProps, {getProfile})(UserWithRouter)

