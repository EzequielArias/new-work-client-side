import { useState } from "react"
import { ResponseData } from "../interfaces"

export const useForm = <T> (initialState : Partial<T>) => {

    const [form, setForm] = useState<T>({
        ...initialState as T
    })

    const [err, setError] = useState<String[]>([])

    const formChange = (e : any) => {
        setForm((current) => {
            return {
                ...current,
                [e.target.name] : e.target.value
            }
        })
        console.log(form)
    }

    const errs = (backendData : ResponseData<String>) => {
        if(!backendData.ok){
            setError((current) => [...current, backendData.payload])
            return true
        }
    }

    return { form, formChange, setForm, errs, err}
}