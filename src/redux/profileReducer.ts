
export type profilePageTypes = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
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

export type dialogsActions = SetProfileACType

const initialState: profilePageTypes = {
    userId: 0,
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
    }
}

function profileReducer(state: profilePageTypes = initialState, action: dialogsActions): profilePageTypes {
    switch (action.type) {
        case 'SET-PROFILE':
            return action.data
        default:
            return state
    }
}

export const setProfileAC = (data: profilePageTypes) => { return {type: 'SET-PROFILE', data} as const }

export default profileReducer