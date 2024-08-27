import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mentors: [],
};

const mentorSlice = createSlice({
    name: 'mentor',
    initialState,
    reducers: {
        addMentorData: (state, action) => {
            state.mentors.push(action.payload);
        },
        removeMentorData: (state, action) => {
            state.mentors = state.mentors.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addMentorData, removeMentorData } = mentorSlice.actions;
export default mentorSlice.reducer;