import { User } from "../interfaces"

export const UserInfo = (res : User) => {
    return {
        name : res.name,
        image : res.image,
        email : res.email
    } 
}