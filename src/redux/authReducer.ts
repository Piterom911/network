export type AuthInitialStateTypes = {
    id: null | number,
    email: null | string,
    login: null | string,
    isFetching: boolean,
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
}

function authReducer(state: AuthInitialStateTypes = initialState, action: AuthRootActionType): AuthInitialStateTypes {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
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

type AuthRootActionType = SetAuthUserDataType

type SetAuthUserDataType = {
    type: 'SET-AUTH-USER-DATA'
    payload: {
        id: number
        email: string
        login: string
    }
}

export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataType => {
    return {type: 'SET-AUTH-USER-DATA', payload: {id, email, login}}
}

export default authReducer