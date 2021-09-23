import {authAPI} from "../../apis/api";
import {RootThunkType} from "../store";
import {AuthInitialStateTypes, AuthRootActionsType, initialState, SetAuthUserDataType} from "./authTypes";
import {authActions} from "./authActions";

function authReducer(state: AuthInitialStateTypes = initialState, action: AuthRootActionsType): AuthInitialStateTypes {
    switch (action.type) {
        case authActions.SET_AUTH_USER_DATA: {
            return {
                ...action.payload,
                isAuth: true,
                isFetching: false,
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataType => {
    return {type: authActions.SET_AUTH_USER_DATA, payload: {id, email, login}}
}

export const getAuthUserData = (): RootThunkType => async dispatch => {
    const authData = await authAPI.authMe()
    if (authData.resultCode === 0) {
        const {id, login, email} = authData.data
        dispatch(setAuthUserData(id, email, login))
    }
}

export default authReducer