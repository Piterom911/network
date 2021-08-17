import React from 'react'
import s from "./Users.module.css";
import OneUserCard from "./OneUserCard/OneUserCard";
import {MapDispatchToPropsType, MapStateToPropsType, UsersPropsType} from "./UsersContainer";
import axios from "axios";
import bg1 from '../../../assets/images/users/user-cover1.jpg'
import bg2 from '../../../assets/images/users/user-cover13.jpg'
import bg3 from '../../../assets/images/users/user-cover3.jpg'
import bg4 from '../../../assets/images/users/user-cover4.jpg'
import bg5 from '../../../assets/images/users/user-cover5.jpg'
import bg6 from '../../../assets/images/users/user-cover6.jpg'
import bg7 from '../../../assets/images/users/user-cover7.jpg'
import bg8 from '../../../assets/images/users/user-cover8.jpg'
import bg9 from '../../../assets/images/users/user-cover9.jpg'
import bg10 from '../../../assets/images/users/user-cover10.jpg'
import bg11 from '../../../assets/images/users/user-cover14.jpg'
import bg12 from '../../../assets/images/users/user-cover11.jpg'
import {UserType} from "../../../redux/usersReducer";

type PropsType = {
    users: UserType[]
    imagesBg: Array<string>
    pagesRender: Array<JSX.Element>
    pagesCount: number
    currentPage: number
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
}

export default function Users(props: PropsType) {
    return (
        <div className={s.contentCenter}>
            <div className={`${s.wrapper} themeBorder`}>
                <div className={s.usersTop}>
                    <h3>People Page</h3>
                    {props.pagesCount > 1 && <div className={s.pagination}>
                        <span onClick={() => props.setCurrentPage(1)} className={s.goToEnd}>&laquo; </span>
                        {props.currentPage > 4 && '... '}
                        {props.pagesRender}
                        {props.currentPage < props.pagesCount - 3 && ' ...'}
                        <span onClick={() => props.setCurrentPage(props.pagesCount)}
                              className={s.goToEnd}> &raquo;</span>
                    </div>}
                </div>
                <div className={s.usersWrapper}>
                    {props.users.map((u, i) => {
                        return <OneUserCard id={u.id}
                                            onFollow={props.onFollow}
                                            onUnfollow={props.onUnfollow}
                                            onSetUsers={props.onSetUsers}
                                            background={props.imagesBg[i]}
                                            photos={u.photos}
                                            name={u.name}
                                            uniqueUrlName={u.uniqueUrlName}
                                            followed={u.followed}
                                            status={u.status}
                                            key={u.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}


// type StateType = {
//     imagesBg: Array<string>
// }
//
// export default class Users extends React.Component<UsersPropsType, StateType> {
//
//     constructor(props: UsersPropsType) {
//         super(props);
//         this.state = {imagesBg: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12]}
//     }
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${this.props.currentPage}`)
//             .then(response => {
//                 this.props.onSetUsers(response.data.items)
//                 this.props.setTotalCount(response.data.totalCount)
//             })
//     }
//
//     setCurrentPage(currentPage: number) {
//         this.props.onsetCurrentPage(currentPage)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagesSize}&page=${currentPage}`)
//             .then(response => {
//                 this.props.onSetUsers(response.data.items)
//             })
//     }
//
//     render() {
//
//         const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize)
//         const pages = []
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//
//         const pagesRender = pages.filter(p => p < this.props.currentPage + 4
//         && p > this.props.currentPage - 4).map( p => {
//             return <span
//                 className={p === this.props.currentPage
//                     ? `${s.page} ${s.currentPage}`
//                     : `${s.page}`}
//                 onClick={() => this.setCurrentPage(p)}
//             >&#160;{p}&#160;</span>
//         })
//
//         return (
//             <div className={s.contentCenter}>
//                 <div className={`${s.wrapper} themeBorder`}>
//                     <div className={s.usersTop}>
//                         <h3>People Page</h3>
//                         {pagesCount > 1 && <div className={s.pagination}>
//                             <span onClick={() => this.setCurrentPage(1)} className={s.goToEnd}>&laquo; </span>
//                             {this.props.currentPage > 4 && '... '}
//                             {pagesRender}
//                             {this.props.currentPage < pagesCount - 3 && ' ...'}
//                             <span onClick={() => this.setCurrentPage(pagesCount)} className={s.goToEnd}> &raquo;</span>
//                         </div>}
//                     </div>
//                     <div className={s.usersWrapper}>
//                         {this.props.users.map((u, i) => {
//                             return <OneUserCard id={u.id}
//                                                 onFollow={this.props.onFollow}
//                                                 onUnfollow={this.props.onUnfollow}
//                                                 onSetUsers={this.props.onSetUsers}
//                                                 background={this.state.imagesBg[i]}
//                                                 photos={u.photos}
//                                                 name={u.name}
//                                                 uniqueUrlName={u.uniqueUrlName}
//                                                 followed={u.followed}
//                                                 status={u.status}
//                                                 key={u.id}/>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }