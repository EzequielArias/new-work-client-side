export interface FormPostState {
    description : "",
    images : any[],
    currentIndexImg : 0
}

export interface UploadPostForm {
    description : string;
    images : File[]
}