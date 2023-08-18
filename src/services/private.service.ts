import axios from 'axios'
import { LoadAbort } from '../utilities'
import { Token, ResponseData, FormPostState} from '../interfaces'
const url = "https://new-work-production.up.railway.app"

// User Enpoints

export const GetUserRegister = (Token : string) => {
    const controller = LoadAbort();
    const headers = {
        Authorization : Token
    }

    return {
        call : axios.post(`${url}/account/getUser`, {},{ headers }),
        controller
    }
}


// Posts Enpoints
export const createNewPost = async (newPost : FormPostState, Token : Token) => {
    const controller = LoadAbort()
    const headers = {
        Authorization : Token.access_token
    }

    return {
        call : axios.post<ResponseData<any>>(`${url}/posts/add`,newPost, {
            headers
        }),
        controller
    }
}

export const getPostById = async (postId : string, Token : Token) => {
    const controller = LoadAbort();
    const headers  = {
        Authorization : Token.access_token 
    }

    return {            // This axios should return a post 
        call : axios.get<ResponseData<any>>(`${url}/posts/${postId}`, { headers }),
        controller 
    }
}

export const getManyPosts = async (limit : number, offset : number, Token : Token) => {
    const controller = LoadAbort();
    const headers  = {
        Authorization : Token.access_token 
    }

    return {
        call : axios.get(`${url}/posts/get?offset=${offset}&limit=${limit}`, { headers }),
        controller
    }
}

export const updatePost = async (postId : string, newData : FormPostState,Token : Token) => {

    const controller = LoadAbort();
    const headers  = {
        Authorization : Token.access_token 
    }

    return {
        call : axios.put(`${url}/posts/edit/${postId}`, newData, { headers }),
        controller
    }
}

