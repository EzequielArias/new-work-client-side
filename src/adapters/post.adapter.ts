import { PostGetResponse, PostsAdapter } from "../interfaces";

export const PostStructure = (data : PostGetResponse[]) : PostsAdapter[] => {
    const result = data.map(current => {
        return {
            id : current.id,
            images : current.images.map(obj => obj.url),
            description : current.description,
            account : current.account
        }
    })
    return result
}