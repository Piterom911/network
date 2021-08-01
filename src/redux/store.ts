import {combineReducers, createStore} from "redux";
import profileReducer, { profileActions, profilePageTypes } from "./profileReducer";
import dialogsReducer, { dialogsActions, dialogsPageTypes, } from "./dialogsReducer";
import rightSidebar, { rightSidebarTypes } from "./rightSidebar";

export type actionsTypes = profileActions | dialogsActions

export type stateTypes = {
    profilePage: profilePageTypes
    dialogsPage: dialogsPageTypes
    rightSidebar: rightSidebarTypes
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightSidebar: rightSidebar
})

const store = createStore(reducers)

export default store