import { createSlice } from "@reduxjs/toolkit";
import { PostGetResponse, PostReduxState, PostsAdapter } from "../../interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

export const PostState : PostReduxState = {
    selectedPost : {} as PostGetResponse,
    posts : []
}

export const PostSlice = createSlice({
    name : 'Post',
    initialState : PostState,
    reducers : {

        fillPost : (state, action : PayloadAction<PostsAdapter[]>) =>  {
            return {
                ...state,
                posts : [...state.posts , ...action.payload]
            }
        }

    }
})

export const { fillPost } = PostSlice.actions;