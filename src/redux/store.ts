import {combineReducers, createStore, Store} from "redux";
import profileReducer, { profileActions, profilePageTypes } from "./profileReducer";
import dialogsReducer, { dialogsActions, dialogsPageTypes, } from "./dialogsReducer";
import rightSidebar, { rightSidebarTypes } from "./rightSidebar";

export type actionsTypes = profileActions | dialogsActions
export type StoreType = Store & ReturnType<typeof reducers>

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

const store: StoreType = createStore(reducers)

export default store