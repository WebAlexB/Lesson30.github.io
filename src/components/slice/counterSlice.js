import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 5
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        reset: state => {
            state.value = initialState.value;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
