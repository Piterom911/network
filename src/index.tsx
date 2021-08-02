import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store, {StoreType} from "./redux/store";

const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store))

reportWebVitals();
