import React from 'react'
import s from "./Users.module.css";
import OneUserCard from "./OneUserCard/OneUserCard";
import {UsersPropsType} from "./UsersContainer";
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

export default class Users extends React.Component<any, any>{

    constructor(props: UserType) {
        super(props);
        this.imagesBg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12]
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=12&page=1100')
            .then(response => {
                this.props.onSetUsers(response.data.items)
            })
    }

    render() {
        return (
            <div className={s.contentCenter}>
                <div className={`${s.wrapper} themeBorder`}>
                    <h3>People Page</h3>
                    <div className={s.usersWrapper}>
                        {this.props.users.map((u, i) => {
                            return <OneUserCard id={u.id}
                                                onFollow={this.props.onFollow}
                                                onUnfollow={this.props.onUnfollow}
                                                onSetUsers={this.props.onSetUsers}
                                                background={this.imagesBg[i]}
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
}

// export default function Users(props: UsersPropsType) {
//
//     if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users?count=12&page=1100')
//             .then(response => {
//                 props.onSetUsers(response.data.items)
//             })
//     }
//
//
//     const imagesBg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12]
//
//     return (
//         <div className={s.contentCenter}>
//             <div className={`${s.wrapper} themeBorder`}>
//                 <h3>People Page</h3>
//                 <div className={s.usersWrapper}>
//                     {props.users.map((u, i) => {
//                         return <OneUserCard id={u.id}
//                                             onFollow={props.onFollow}
//                                             onUnfollow={props.onUnfollow}
//                                             onSetUsers={props.onSetUsers}
//                                             background={imagesBg[i]}
//                                             photos={u.photos}
//                                             name={u.name}
//                                             uniqueUrlName={u.uniqueUrlName}
//                                             followed={u.followed}
//                                             status={u.status}
//                                             key={u.id}/>
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }