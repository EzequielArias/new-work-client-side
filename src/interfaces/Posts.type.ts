export interface PostCardData {
    description : string;
    images : Array<string>;
    user : string;
    userSubTitle : string;
    userProfile : string;
}

export interface Image {
    url: string;
}

export interface Account {
    name:  string;
    image: string;
    id:    string;
}

export interface PostGetResponse {
    id:          string;
    description: string;
    images:      Image[];
    account : Account
}

export interface PostsAdapter {
    id : string;
    description : string;
    images : string[]
    account : Account
}

export type PostReduxState = {
    selectedPost : PostGetResponse;
    posts : PostsAdapter[]
}

