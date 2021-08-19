import React from "react";
import User from "./User";
import {connect} from "react-redux";
import {profilePageTypes, setProfileAC} from "../../../../redux/profileReducer";
import axios from "axios";
import {AppStateTypes} from "../../../../redux/store";

export class UserAPI extends React.Component<profilePageTypes & MDTPType, {}> {
    // constructor() {
    //     super();
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11112`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return <User {...this.props} />
    }
}

export type MDTPType = {
    setProfile: (data: profilePageTypes) => void
}

const mapDispatchToProps = {setProfile: setProfileAC}

const mapStateToProps = (state: AppStateTypes) => {
    return {
        userId: state.profilePage.userId,
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
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserAPI)

export default UserContainer