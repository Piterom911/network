import React from 'react'
import {connect} from "react-redux";
import {AppStateTypes} from "../../../redux/store";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleFollowIsFetching,
    toggleIsFetching,
    unfollow,
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
import s from "./Users.module.css";
import {usersAPI} from "../../../apis/api";

type StateType = {
    imagesBg: Array<string>
}

export type ProfilePageType = {
    title?: string
    className?: string
}

class UsersAPI extends React.Component<UsersPropsType & ProfilePageType, StateType> {

    constructor(props: UsersPropsType & ProfilePageType) {
        super(props);
        this.state = {imagesBg: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12]}
    }

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pagesSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    setCurrentPage = (currentPage: number) => {
        if (currentPage === this.props.currentPage) return
        console.log(this.props)
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(currentPage, this.props.pagesSize)
            .then(data => {
                this.props.setUsers(data.items)
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
            return <span key={p}
                         className={p === this.props.currentPage
                             ? `${s.page} ${s.currentPage}`
                             : `${s.page}`}
                         onClick={() => this.setCurrentPage(p)}
            >&#160;{p}&#160;</span>
        })

        return <Users users={this.props.users}
                      title={this.props.title}
                      className={this.props.className}
                      isFetching={this.props.isFetching}
                      pagesCount={pagesCount}
                      currentPage={this.props.currentPage}
                      imagesBg={this.state.imagesBg}
                      pagesRender={pagesRender}
                      setCurrentPage={this.setCurrentPage}
                      onSetUsers={this.props.setUsers}
                      onFollow={this.props.follow}
                      onUnfollow={this.props.unfollow}
                      toggleFollowIsFetching={this.props.toggleFollowIsFetching}
                      toggleIsFetching={this.props.toggleIsFetching}
                      isFollowFetching={this.props.isFollowFetching}
        />
    }
}

export type MapStateToPropsType = {
    users: UserType[]
    pagesSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    isFollowFetching: number[]
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowIsFetching: (userID: number, fetchingStatus: boolean) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (pagesCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        isFollowFetching: state.usersPage.isFollowFetching,
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, {
        follow, unfollow, toggleFollowIsFetching, setUsers, setCurrentPage, setTotalCount, toggleIsFetching
    } as MapDispatchToPropsType)(UsersAPI)

export default UsersContainer