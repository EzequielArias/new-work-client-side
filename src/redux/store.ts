import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice } from "./states";

export const store = configureStore({
    reducer : {
        account : AccountSlice.reducer 
    }
})