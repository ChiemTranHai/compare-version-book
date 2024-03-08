import {createSlice} from "@reduxjs/toolkit";

interface ExampleState {
    loading: boolean
}

const initialState: ExampleState = {
    loading: false,
}
const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        getExample: (state) => {
            state.loading = true;
        },
        getExampleSuccess: (state, action) => {
            state.loading = false;
        },
        getExampleError: (state) => {
            state.loading = false;
        },
    }
})

const exampleReducer = exampleSlice.reducer;
export const {
    getExample,
    getExampleSuccess,
    getExampleError,
} = exampleSlice.actions;
export default exampleReducer