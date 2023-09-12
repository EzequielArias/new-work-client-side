import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ExperiencesState, WorkOrEducationInterface } from "../../interfaces";

const experiencesState : ExperiencesState = {
    workExperience : [],
    academic : []
}

export const ExperiencesSlice = createSlice({
    name : 'experiences',
    initialState : experiencesState,
    reducers : {
        fillWorkExperience : (
            state : ExperiencesState, 
            action : PayloadAction<WorkOrEducationInterface[]>) => {

            return {
                ...state,
                workExperience : [...state.workExperience, ...action.payload]
            }
        },
        
        fillAcademic : (
            state : ExperiencesState, 
            action : PayloadAction<WorkOrEducationInterface[]>) => {

                return {
                    ...state,
                    academic : [...state.academic, ...action.payload]
                }
            }
    }
})

export const { fillAcademic, fillWorkExperience } = ExperiencesSlice.actions;