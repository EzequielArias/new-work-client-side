import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";

export const UserState : User = {
    name : "",
    email : "",
    image : ""
}

export const AccountSlice = createSlice({
    name : 'account',
    initialState : UserState,
    reducers : {
        signup : (state, action) => state = action.payload,

        signin : (state, action) => state = action.payload,

        setUserData : (state, action : PayloadAction<User>) => {
                state.email = action.payload.email
                state.image = action.payload.image
                state.name = action.payload.name
        }
    }
})

export const { signup, signin, setUserData } = AccountSlice.actions;