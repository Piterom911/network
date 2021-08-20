import React from "react";
import User from "./User";
import {connect} from "react-redux";
import {profilePageTypes, setProfileAC, toggleIsFetchingAC} from "../../../../redux/profileReducer";
import axios from "axios";
import {AppStateTypes} from "../../../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userID: string,
}

export type PropsType = RouteComponentProps<PathParamsType> & profilePageTypes & MDTPType

export class UserAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        const userID = this.props.match.params.userID
        console.log(userID)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        const userID = this.props.match.params.userID
       if(prevProps.match.params.userID === userID) {
           return
       }
       this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setProfile(response.data)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <User {...this.props} />
    }
}

export type MDTPType = {
    setProfile: (data: profilePageTypes) => void
    toggleIsFetching: (value: boolean) => void
}

const mapDispatchToProps = {
    setProfile: setProfileAC,
    toggleIsFetching: toggleIsFetchingAC
}

const mapStateToProps = (state: AppStateTypes): profilePageTypes => {
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
        },
        isFetching: state.profilePage.isFetching
    }
}

const UserWithRouter = withRouter(UserAPI)

export default connect(mapStateToProps, mapDispatchToProps)(UserWithRouter)

