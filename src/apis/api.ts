import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {ProfilePageTypes} from "../redux/profileReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '18e1d480-771d-4bcb-b6a1-86b6a255bc4b'
    }
})

type FollowApiResponseType = {
    resultCode: 1 | 0
    messages: string[]
    data: {}
}
type UserApiResponseType = {
    error: null | string
    items: UserType[]
    totalCount: number
}
type AuthApiResponseType = {
    resultCode: 0 | 1
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}
type ProfileApiResponseType = ProfilePageTypes

export const followAPI = {
    follow(userID: number) {
        return instance.post<FollowApiResponseType>(`follow/${userID}`, {})
            .then(res => res.data)
    },
    unfollow(userID: number) {
        return instance.delete<FollowApiResponseType>(`follow/${userID}`)
            .then(res => res.data)
    },
}
export const usersAPI = {
    getUsers(currentPage: number, pagesSize: number) {
        return instance.get<UserApiResponseType>(`users?page=${currentPage}&count=${pagesSize}`)
            .then(res => {
                return res.data
            })
    },
}
export const authAPI = {
    authMe() {
        return instance.get<AuthApiResponseType>(`auth/me`)
            .then(res => {
                return res.data
            })
    },
}
export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<ProfileApiResponseType>(`profile/${userID}`)
            .then(res => {
                return res.data
            })
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`)
    },
    setStatus(status: string) {
        return instance.put('profile/status', {status})
    }
}