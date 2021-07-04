export type postTypes = {
    id: number
    likes: number
    post: string
}

export type dialogTypes = {
    id: number
    name: string
    avatar: string
    isYour: boolean
    lastMessage: string
}

export type messageTypes = {
    id: number
    isYou: boolean
    avatar: string
    message: string
}

export type onlineFriendTypes = {
    id: number
    avatar: string
    name: string
}

export type profilePageTypes = {
    posts: Array<postTypes>
}

export type dialogsPageTypes = {
    dialogs: Array<dialogTypes>
    messages: Array<messageTypes>
}

export type rightSidebarTypes = {
    onlineFriends: onlineFriendTypes[]
}

export type stateTypes = {
    profilePage: profilePageTypes
    dialogsPage: dialogsPageTypes
    rightSidebar: rightSidebarTypes
}

const state: stateTypes = {
    profilePage: {
        posts: [
            {id: 1, likes: 8, post: 'This is my first post'},
            {id: 2, likes: 3, post: 'I think this post should be longer than others and it not necessary to be interesting and be right.'},
            {id: 3, likes: 17, post: 'The truth is... I am Iron Man!'}
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Andrew',
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar3.jpg',
                isYour: true,
                lastMessage: 'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'
            },
            {
                id: 2,
                name: 'Lucy',
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar4.jpg',
                isYour: false,
                lastMessage: 'This will be my first time hiking in the mountains!'
            },
        ],
        messages: [
            {
                id: 2,
                isYou: false,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar3.jpg',
                message: 'Oh! Okay, I will chek it. Is its good for you? I will give you feedback!'
            },
            {
                id: 1,
                isYou: true,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/friend-avatar8.jpg',
                message: 'Ha ha! You should be kidding me?!!!'
            },
        ]
    },
    rightSidebar: {
        onlineFriends: [
            {
                id: 1,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend1.jpg',
                name: 'Morgan Freeman'
            },
            {
                id: 2,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend2.jpg',
                name: 'Jackie Chan'
            },
            {
                id: 3,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend3.jpg',
                name: 'Bruce Willis'
            },
            {
                id: 4,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend4.jpg',
                name: 'Jennifer Lawrence'
            },
            {
                id: 5,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend5.jpg',
                name: 'Julia Roberts'
            },
            {
                id: 6,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend6.jpg',
                name: 'Jennifer Aniston'
            },
            {
                id: 7,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend7.jpg',
                name: 'Will Smith'
            },
            {
                id: 8,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend8.jpg',
                name: 'Angelina Jolie'
            },
            {
                id: 9,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend9.jpg',
                name: 'Bruce Willis'
            },
            {
                id: 10,
                avatar: 'http://wpkixx.com/html/pitnik-dark/images/resources/side-friend10.jpg',
                name: 'Scarlett Johansson'
            },
        ]
    }
}

export default state