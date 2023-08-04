import { useState } from "react"
import { ResponseData, UserForm } from "../interfaces"

export const useForm = () => {

    const [user, setUser] = useState<UserForm>({
        password : "",
        email : "",
    })
    const [err, setError] = useState<String[]>([""])

    const userChange = (e : any) => {
        setUser((current : UserForm) => {
            return {
                ...current,
                [e.target.name] : e.target.value
            }
        })
    }

    const errs = (backendData : ResponseData<any>) => {
        if(!backendData.ok){
            setError(backendData.payload)
            return true
        }
    }

    return { user, userChange, errs, err}
}