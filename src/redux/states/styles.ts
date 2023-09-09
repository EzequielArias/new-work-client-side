import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const styleState = {
    AchivementSlotForm : false
}

export const StyleSlice = createSlice({
    name : 'style',
    initialState : styleState,
    reducers : {
        achiviementSlotForm : (state, action : PayloadAction<boolean>) => {
            return {
                ...state,
                AchivementSlotForm : action.payload
            }
        }
    }
})

export const { achiviementSlotForm } = StyleSlice.actions;