import React from 'react'
import Posts from './Posts/Posts';
import s from './Content.module.css'
import {LeftSide} from "./LeftSide/LeftSide";
import {RightSide} from "./RightSide/RightSide";
import {Redirect, Route} from 'react-router-dom';
import MessagesContainer from "./Dialogs/Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import Profile from "./Profile/Profile";
import {Login} from "./Login/Login";

export function Content() {
    return (
        <>
            <div className={s.wrapper}>
                <Route path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                <Route path={['/posts', '/messages']} render={() => <LeftSide/>}/>
                <div className={`innerCenter`}>
                    <Route path={'/posts'} render={() => <Posts/>}/>
                    <Route path={'/messages'} render={() => <MessagesContainer/>}/>
                </div>
                <Route path={['/posts', '/messages']} render={() => <RightSide/>}/>
            </div>
            <Route path={'/profile/:userID?'} render={() => <Profile/>}/>
            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
            {/*<Route render={() => <h1 style={{fontSize: '100px', textAlign: 'center'}}>404</h1>}/>*/}
        </>
    )
}