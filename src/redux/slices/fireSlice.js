import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: "idle"
};

const fireSlice = createSlice ({
    name: "items", 
    initialState,
    reducers: {
        clearItems: state => {
            state.items = [];
            state.status = "idle";
        }
    }
});

export const { clearItems } = fireSlice.actions;
export default fireSlice.reducer;