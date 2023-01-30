import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { IProduct } from '../../interfaces/IProductResponse';

interface ICounterState {
    value: number;
}

const initialStateCounter: ICounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateCounter,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { increment, incrementAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;