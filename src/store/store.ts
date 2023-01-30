import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter/conter-slice';
import { productReducer } from '../features/product/product-slice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        counter: counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;