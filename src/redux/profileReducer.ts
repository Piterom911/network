
export type profilePageTypes = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    isFetching: boolean
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType ={
    small: string
    large: string
}

export type SetProfileACType = ReturnType<typeof setProfileAC>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export type dialogsActions = SetProfileACType | ToggleIsFetchingACType

const initialState: profilePageTypes = {
    userId: 11450,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    photos: {
        small: '',
        large: ''
    },
    isFetching: false
}

function profileReducer(state: profilePageTypes = initialState, action: dialogsActions): profilePageTypes {
    switch (action.type) {
        case 'SET-PROFILE':
            return action.data
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.value}
        default:
            return state
    }
}

export const setProfileAC = (data: profilePageTypes) => { return {type: 'SET-PROFILE', data} as const }
export const toggleIsFetchingAC = (value: boolean) => { return {type: 'TOGGLE-IS-FETCHING', value} as const }

export default profileReducer