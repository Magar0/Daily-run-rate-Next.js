import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     id: '',
//     startDate: '',
//     endDate: '',
//     excludeDates: "",
//     leadCount: ""
// }

const drrSlice = createSlice({
    name: "drr",
    initialState: [],
    reducers: {
        addDrr(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            state.splice(action.payload, 1)
        },
        deleteAllDrr(state, action) {
            return []
        },
    }
})

export default drrSlice.reducer

export const { addDrr, remove, deleteAllDrr } = drrSlice.actions