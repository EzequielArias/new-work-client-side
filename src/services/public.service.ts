import axios from 'axios'
import { LoadAbort } from '../utilities'
import { Token, ResponseData, User, UserForm} from '../interfaces'
const url = "https://new-work-production.up.railway.app"

export const signUp = (usr : UserForm) => {
    return {
        call: axios.post<ResponseData<{ tokens : Token, currentUser : User} | string>>(`${url}/account/signup`, {
            email : usr.email,
            name : usr.email.split('@')[0],
            password : usr.password
        })
    }
}

export const signIn = (usr : UserForm) => {
    return {
        call : axios.post<ResponseData<{ tokens : Token, currentUser : User} | string>>(`${url}/account/signin`,{
            email : usr.email,
            password : usr.password
        })
    }
}

