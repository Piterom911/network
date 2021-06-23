import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineContacts} from "./components/OnlineContacts/OnlineContacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content />
            <OnlineContacts />
        </div>
    );
}

export default App;
