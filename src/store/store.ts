import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../features/cart/cart-reducer';
import { productReducer } from '../features/product/product-reducer';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;