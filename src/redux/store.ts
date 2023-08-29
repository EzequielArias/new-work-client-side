import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice, PostSlice } from "./states";

export const store = configureStore({
    reducer : {
        account : AccountSlice.reducer,
        posts : PostSlice.reducer
    }
})

export type StoreType = ReturnType<typeof store.getState>