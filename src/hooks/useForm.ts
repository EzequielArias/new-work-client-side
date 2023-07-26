import { useState } from "react"
import { UserForm } from "../interfaces"

export const useForm = () => {

    const [user, setUser] = useState<UserForm>({
        password : "",
        email : "",
    })

    const userChange = (e : any) => {
        setUser((current : UserForm) => {
            return {
                ...current,
                [e.target.name] : e.target.value
            }
        })
    }

    return { user, userChange}
}