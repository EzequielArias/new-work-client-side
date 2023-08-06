import { useState } from "react"
import { ResponseData } from "../interfaces"

export const useForm = <T> (initialState : Partial<T>) => {

    const [form, setForm] = useState<T>({
        ...initialState as T
    })

    const [err, setError] = useState<String[]>([""])

    const formChange = (e : any) => {
        setForm((current) => {
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

    return { form, formChange, setForm, errs, err}
}