import {combineReducers, createStore, Store} from "redux";
import profileReducer, { profileActions, profilePageTypes } from "./profileReducer";
import dialogsReducer, { dialogsActions, dialogsPageTypes, } from "./dialogsReducer";
import rightSidebar, { rightSidebarTypes } from "./rightSidebar";
import usersReducer from "./usersReducer";

export type actionsTypes = profileActions | dialogsActions
export type AppStateTypes = ReturnType<typeof rootReducer>
export type StoreType = Store & AppStateTypes

export type stateTypes = {
    profilePage: profilePageTypes
    dialogsPage: dialogsPageTypes
    rightSidebar: rightSidebarTypes
}

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    rightSidebar: rightSidebar,
    usersPage: usersReducer
})

const store: StoreType = createStore(rootReducer)

export default store