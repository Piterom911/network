import {combineReducers, createStore, Store} from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import rightSidebar from "./rightSidebar";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

export type AppStateTypes = ReturnType<typeof rootReducer>
export type StoreType = Store & AppStateTypes

const rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    rightSidebar: rightSidebar,
    usersPage: usersReducer,
    profilePage: profileReducer
})

const store: StoreType = createStore(rootReducer)

export default store