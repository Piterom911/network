import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {OnlineContacts} from "./components/OnlineContacts/OnlineContacts";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <Content />
                <OnlineContacts />
            </div>
        </BrowserRouter>
    );
}

export default App;
