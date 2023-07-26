import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";

export const UserState : User = {
    name : "",
    email : ""
}

export const AccountSlice = createSlice({
    name : 'account',
    initialState : UserState,
    reducers : {
        signup : (state, action) => state = action.payload,

        signin : (state, action) => state = action.payload
    }
})

export const { signup, signin } = AccountSlice.actions;