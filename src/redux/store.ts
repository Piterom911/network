import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import rightSidebar from "./rightSidebar";
import usersReducer, {UsersRootActionsType} from "./usersReducer";
import profileReducer, {DialogsActionsRootType} from "./profileReducer";
import authReducer, {AuthRootActionsType} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import statusReducer, {StatusRootActionsType} from "./statusReducer";

export type AppStateTypes = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    rightSidebar: rightSidebar,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    status: statusReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppActionsType = UsersRootActionsType
    | DialogsActionsRootType | AuthRootActionsType | StatusRootActionsType
export type RootThunkType = ThunkAction<void, AppStateTypes, unknown, AppActionsType>


//@ts-ignore
window.store = store

export default store