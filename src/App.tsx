import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineFriends} from "./components/OnlineFriends/OnlineFriends";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content />

            <OnlineFriends />
        </div>
    );
}

export default App;
