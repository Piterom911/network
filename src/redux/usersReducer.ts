import {v1} from "uuid";

export type UsersPageTypes = {
    users: UserType[]
}

export type UserType = {
    id: string
    name: string
    isFollowed: boolean
    location: LocationType
    image: string
    background: string
    status: string
}

type LocationType = {
    country: string
    city: string
}

const initialState = {
    users: [
        {
            id: v1(),
            status: 'The truth is... I am Iron Man!',
            name: 'Jim Winston',
            isFollowed: false,
            location: {
                country: 'Ukraine',
                city: 'Chernihiv'
            },
            image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure1.jpg',
            background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover1.jpg'
        },
        {
            id: v1(),
            status: 'I think I am the Best!',
            name: 'Clair Pool',
            isFollowed: true,
            location: {
                country: 'Ukraine',
                city: 'Chernihiv'
            },
            image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure2.jpg',
            background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover2.jpg'
        },
        {
            id: v1(),
            status: '',
            name: 'Yan Prat',
            isFollowed: true,
            location: {
                country: 'Mexico',
                city: 'USA'
            },
            image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure4.jpg',
            background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover4.jpg'
        },
        {
            id: v1(),
            status: 'I can do anything!',
            name: 'Roman Dogoda',
            isFollowed: false,
            location: {
                country: 'Ukraine',
                city: 'Chernihiv'
            },
            image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure3.jpg',
            background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover3.jpg'
        }
    ]
}

function usersReducer(state: UsersPageTypes = initialState, action: any) {
    switch (action.type) {
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.isFollowed = true
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.isFollowed = false
                    }
                    return u
                })
            }
        default:
            return state
    }
}

export const followAC = (userID: string) => {
    return {type: 'FOLLOW', userID} as const
}

export const unfollowAC = (userID: string) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'SET-USERS'} as const
}

export default usersReducer