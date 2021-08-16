
export type UsersPageTypes = {
    users: UserType[]
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
    users: [
        // {
        //     id: v1(),
        //     status: 'The truth is... I am Iron Man!',
        //     name: 'Jim Winston',
        //     isFollowed: false,
        //     location: {
        //         country: 'Ukraine',
        //         city: 'Chernihiv'
        //     },
        //     image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure1.jpg',
        //     background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover1.jpg'
        // },
        // {
        //     id: v1(),
        //     status: 'I think I am the Best!',
        //     name: 'Clair Pool',
        //     isFollowed: true,
        //     location: {
        //         country: 'Ukraine',
        //         city: 'Chernihiv'
        //     },
        //     image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure2.jpg',
        //     background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover2.jpg'
        // },
        // {
        //     id: v1(),
        //     status: '',
        //     name: 'Yan Prat',
        //     isFollowed: true,
        //     location: {
        //         country: 'Mexico',
        //         city: 'USA'
        //     },
        //     image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure4.jpg',
        //     background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover4.jpg'
        // },
        // {
        //     id: v1(),
        //     status: 'I can do anything!',
        //     name: 'Roman Dogoda',
        //     isFollowed: false,
        //     location: {
        //         country: 'Ukraine',
        //         city: 'Chernihiv'
        //     },
        //     image: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-figure3.jpg',
        //     background: 'http://wpkixx.com/html/pitnik-dark/images/resources/frnd-cover3.jpg'
        // }
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
        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {type: 'FOLLOW', userID} as const
}

export const unfollowAC = (userID: number) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users} as const
}

export default usersReducer