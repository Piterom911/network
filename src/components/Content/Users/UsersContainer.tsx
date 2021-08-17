import React from 'react'
import {connect} from "react-redux";
import {AppStateTypes} from "../../../redux/store";
import Users from "./Users";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../../redux/usersReducer";
import bg1 from "../../../assets/images/users/user-cover1.jpg";
import bg2 from "../../../assets/images/users/user-cover13.jpg";
import bg3 from "../../../assets/images/users/user-cover3.jpg";
import bg4 from "../../../assets/images/users/user-cover4.jpg";
import bg5 from "../../../assets/images/users/user-cover5.jpg";
import bg6 from "../../../assets/images/users/user-cover6.jpg";
import bg7 from "../../../assets/images/users/user-cover7.jpg";
import bg8 from "../../../assets/images/users/user-cover8.jpg";
import bg9 from "../../../assets/images/users/user-cover9.jpg";
import bg10 from "../../../assets/images/users/user-cover10.jpg";
import bg11 from "../../../assets/images/users/user-cover14.jpg";
import bg12 from "../../../assets/images/users/user-cover11.jpg";
import axios from "axios";
import s from "./Users.module.css";

type StateType = {
    imagesBg: Array<string>
}

class UsersAPI extends React.Component<UsersPropsType, StateType> {

    constructor(props: UsersPropsType) {
        super(props);
        this.state = {imagesBg: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12]}
    }

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setCurrentPage = (currentPage: number) => {
        if (currentPage === this.props.currentPage) return
        console.log(this.props)
        this.props.onsetCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${currentPage}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const pagesRender = pages.filter(p => p < this.props.currentPage + 4
            && p > this.props.currentPage - 4).map( p => {
            return <span
                className={p === this.props.currentPage
                    ? `${s.page} ${s.currentPage}`
                    : `${s.page}`}
                onClick={() => this.setCurrentPage(p)}
            >&#160;{p}&#160;</span>
        })

        return <Users users={this.props.users}
                      isFetching={this.props.isFetching}
                      pagesCount={pagesCount}
                      currentPage={this.props.currentPage}
                      imagesBg={this.state.imagesBg}
                      pagesRender={pagesRender}
                      setCurrentPage={this.setCurrentPage}
                      onSetUsers={this.props.onSetUsers}
                      onFollow={this.props.onFollow}
                      onUnfollow={this.props.onUnfollow}
                      toggleIsFetching={this.props.toggleIsFetching}
        />
    }
}

export type MapStateToPropsType = {
    users: UserType[]
    pagesSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
    onsetCurrentPage: (currentPage: number) => void
    setTotalCount: (pagesCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onFollow: (userID: number) => dispatch(followAC(userID)),
        onUnfollow: (userID: number) => dispatch(unfollowAC(userID)),
        onSetUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        onsetCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalCount: (pagesCount) => dispatch(setTotalCountAC(pagesCount)),
        toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer