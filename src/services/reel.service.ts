import axios from 'axios';
import { Token, ResponseData } from '../interfaces'
import { LoadAbort } from '../utilities';


export const getCandidates = (Token : Token) => {

    const url = "http://localhost:3000"
    const controller = LoadAbort();
    const headers = {
        Authorization : Token.access_token
    }

    return {
        call : axios.post<ResponseData<any>>(`${url}/account/candidates`,{}, { headers }),
        controller
    }
}