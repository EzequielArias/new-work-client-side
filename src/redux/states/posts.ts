import { createSlice } from "@reduxjs/toolkit";

export const PostState = {
    selectedPost : {},
    posts : []
}

export const PostSlice = createSlice({
    name : 'Post',
    initialState : PostState,
    reducers : {

        fillPost : (state, action) => state.posts = action.payload,

    }
})

export const { fillPost } = PostSlice.actions;