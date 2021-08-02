import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineFriends} from "./components/OnlineFriends/OnlineFriends";
import {StoreType} from "./redux/store";

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    const friends = props.store.getState().rightSidebar.onlineFriends
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content store={props.store} />
            <OnlineFriends friends={friends}/>
        </div>
    );
}

export default App;
