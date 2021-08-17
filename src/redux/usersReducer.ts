
export type UsersPageTypes = {
    users: UserType[]
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    followed: boolean
    photos: PhotosType
    uniqueUrlName: string
    status: string
}

const initialState = {
    users: [],
    pagesSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

function usersReducer(state: UsersPageTypes = initialState, action: RootActionType) {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = true
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = false
                    }
                    return u
                })
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-PAGES-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unfollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetPagesCountType = ReturnType<typeof setTotalCountAC>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>

type RootActionType = FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetPagesCountType
    | ToggleIsFetchingType

export const followAC = (userID: number) => { return {type: 'FOLLOW', userID} as const }
export const unfollowAC = (userID: number) => { return {type: 'UNFOLLOW', userID} as const }
export const setUsersAC = (users: Array<UserType>) => { return {type: 'SET-USERS', users} as const }
export const setCurrentPageAC = (currentPage: number) => { return {type: 'SET-CURRENT-PAGE', currentPage} as const }
export const setTotalCountAC = (totalCount: number) => { return {type: 'SET-PAGES-COUNT', totalCount} as const }
export const toggleIsFetchingAC = (isFetching: boolean) => { return {type: 'TOGGLE-IS-FETCHING', isFetching} as const }

export default usersReducer