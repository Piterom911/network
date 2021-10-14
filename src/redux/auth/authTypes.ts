import {authActions} from "./authActions";
import {setInitializedStatus, setLoginData, setLogoutData, setResponseError} from "./authReducer";

export interface AuthInitialStateTypes  {
    id: number,
    email: string,
    login: string,
    isFetching: boolean,
    isAuth: boolean,
    isResponseError: null | string,
    isInitialized: boolean,
}

export const initialState = {
    id: 0,
    email: '',
    login: '',
    isFetching: true,
    isAuth: false,
    isResponseError: null,
    isInitialized: false,
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
export type SetResponseErrorType = ReturnType<typeof setResponseError>
export type SetInitializedStatusType = ReturnType<typeof setInitializedStatus>

export type AuthRootActionsType = SetAuthUserDataType | SetLoginDataType
    | SetLogoutDataType | SetResponseErrorType | SetInitializedStatusType