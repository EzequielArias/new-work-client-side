
export interface ComponentArr {
        name : string;
        component : any
}

export interface ProfilePageSelector {
    current : string;
    components : ComponentArr[]
}

// User Profile data shapes

export interface UserProfile {
    name : string
    avatar : string
    academic : string[]
    workexperience : string[]
}

