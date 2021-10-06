import {authActions} from "./authActions";
import {setLoginData, setLogoutData} from "./authReducer";

export interface AuthInitialStateTypes  {
    id: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean
}

export const initialState = {
    id: 0,
    isAuth: false,
    email: '',
    login: '',
    isFetching: true,
}
export type SetAuthUserDataType = {
    type: authActions.SET_AUTH_USER_DATA
    payload: {
        id: number
        email: string
        login: string
    }
}
export type SetLoginDataType = ReturnType<typeof setLoginData>
export type SetLogoutDataType = ReturnType<typeof setLogoutData>

export type AuthRootActionsType = SetAuthUserDataType | SetLoginDataType | SetLogoutDataType