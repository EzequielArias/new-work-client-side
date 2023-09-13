import axios from 'axios'
import { LoadAbort } from '../utilities'
import { Token, ResponseData, UploadPostForm, WorkOrEducationInterface } from '../interfaces'
//const url = "https://new-work-production.up.railway.app"
const url = "http://localhost:3000"

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

export const editUser = (Token : Token , data : any) => {
    const controller = LoadAbort();
    const headers = {
        Authorization : Token.access_token
    }

    return {
        call : axios.post(`${url}/account/edit`, data, { headers }),
        controller
    }
}

// Posts Enpoints
export const createNewPost = (newPost : FormData, Token : string) => {
    const controller = LoadAbort()
    const headers = {
        Authorization : Token
    }

    return {
        call : axios.post<ResponseData<any>>(`${url}/posts/upload`,newPost, {
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

export const getManyPosts = (limit : number, offset : number, Token : Token) => {
    const controller = LoadAbort();
    const headers  = {
        Authorization : Token.access_token 
    }

    return {
        call : axios.get(`${url}/posts/get?offset=${offset}&limit=${limit}`, { headers }),
        controller
    }
}

export const updatePost = (postId : string, newData : UploadPostForm,Token : Token) => {

    const controller = LoadAbort();
    const headers  = {
        Authorization : Token.access_token 
    }

    return {
        call : axios.put(`${url}/posts/edit/${postId}`, newData, { headers }),
        controller
    }
}


// WorkExperience endpoints

export const addWorkExperience = (experience : WorkOrEducationInterface , Token : Token) => {
    const controller = LoadAbort();
    const headers = {
        Authorization : Token.access_token
    }
    console.log('AGREGAR EXPERIENCIA')
    return {
        call : axios.post<ResponseData<any>>(`${url}/workexperience/add`, experience, { headers }),
        controller
    }
}

export const getExperience = (Token : Token) => {
    const controller = LoadAbort();
    const headers = {
        Authorization : Token.access_token
    }

    return {
        call : axios.get(`${url}/workexperience/get`, { headers }),
        controller
    }
}

// Education enpoints

export const addEducation = (education : WorkOrEducationInterface, Token : Token) => {
    const controller = LoadAbort();
    const headers = {
        Authorization : Token.access_token
    }
    console.log('AGRGAR EDUCATION')
    return {
        call : axios.post<ResponseData<any>>(`${url}/academic/add`, education, { headers }),
        controller 
    }
}

export const getEducation = (Token : Token) => {
    const controller = LoadAbort();
    const headers = {
        Authorization : Token.access_token
    }

    return {
        call : axios.get<ResponseData<any>>(`${url}/academic/get`,{ headers }),
        controller
    }
}


