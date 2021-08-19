import React from 'react'
import s from "./Users.module.css";
import OneUserCard from "./OneUserCard/OneUserCard";
import {UserType} from "../../../redux/usersReducer";
import PreloaderStar from "../../../icons/Preloaders/PreloaderStar";

type PropsType = {
    users: UserType[]
    imagesBg: Array<string>
    pagesRender: Array<JSX.Element>
    pagesCount: number
    currentPage: number
    isFetching: boolean
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    onSetUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export default function Users(props: PropsType) {
    return (
        <div className={`contentCenter`}>
            <div className={`themeBorder themeBorderPad`}>
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
                    { props.isFetching && <PreloaderStar /> }
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
                                            isFetching={props.isFetching}
                                            key={u.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}