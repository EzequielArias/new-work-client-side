import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice, PostSlice, StyleSlice, ExperiencesSlice, CandidateSlice } from "./states";

export const store = configureStore({
    reducer : {
        account : AccountSlice.reducer,
        posts : PostSlice.reducer,
        style : StyleSlice.reducer,
        experience : ExperiencesSlice.reducer,
        candidates : CandidateSlice.reducer
    },
    
})

export type StoreType = ReturnType<typeof store.getState>