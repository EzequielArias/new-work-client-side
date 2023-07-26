export interface ResponseData<T> {
    ok : boolean
    statusCode : number
    payload : T
}