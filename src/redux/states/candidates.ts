import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AccoundCardParams, CandidateRedux } from "../../interfaces";


export const CandidatesState : CandidateRedux= {
    candidates : []
}

export const CandidateSlice = createSlice({
    name : 'candidates',
    initialState : CandidatesState,
    reducers : {
        fillCandidates : (state : CandidateRedux, action : PayloadAction<AccoundCardParams[]>) => {
            return {
                ...state,
                candidates : [...action.payload]
            }
        }
    }
})

export const { fillCandidates } = CandidateSlice.actions;