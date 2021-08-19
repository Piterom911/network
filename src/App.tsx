import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineFriends} from "./components/OnlineFriends/OnlineFriends";
import {StoreType} from "./redux/store";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";
import User from "./components/Content/Users/User/User";

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    const friends = props.store.getState().rightSidebar.onlineFriends
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content />

            <OnlineFriends friends={friends}/>
        </div>
    );
}

export default App;
