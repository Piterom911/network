import React from "react";
import UsersContainer from "../Users/UsersContainer";
import UserContainer from "../Users/User/UserContainer";

export default function Profile() {
    return (
        <>
            <UserContainer />
            <UsersContainer className={'profile'} title={'Other People'}/>
        </>
    )
}