import { createSlice } from "@reduxjs/toolkit";

type State = {
    value: number;
};

const initialState: State = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: {value: number}) => {
            state.value += 1;
        },
        decrement: (state: {value: number}) => {
            state.value -= 1;
        },
        incrementByAmout: (
            state: {value: number},
            action: {payload: number}
        ) => {
            state.value += action.payload;
        }
    },
});

export const { increment, decrement, incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;