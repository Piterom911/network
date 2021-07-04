import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineFriends} from "./components/OnlineFriends/OnlineFriends";
import {stateTypes} from "./state";

type PropsType = {
    state: stateTypes
}

function App(props: PropsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content state={props.state}/>
            <OnlineFriends friends={props.state.rightSidebar.onlineFriends}/>
        </div>
    );
}

export default App;
