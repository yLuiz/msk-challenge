import { createReducer } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProductResponse';
import { ProductActions } from './product-actions';

interface IProductState {
    data: IProduct[];
};

let initialStateProduct: IProductState = {
    data: [],
};

const {
    getProducts,
    setAllProducts
} = ProductActions;

export const productReducer = createReducer(initialStateProduct, {
    [getProducts.type]: (state) => {
        return state;
    },
    [setAllProducts.type]: (state, action) => {
        state = {
            ...state,
            data: action.payload.products
        }
        return state;
    }
});
