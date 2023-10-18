import { configureStore } from "@reduxjs/toolkit";
import drrSlice from "./slices/DrrSlices";

const store = configureStore({
    reducer: {
        drr: drrSlice,
    }
})

export default store;