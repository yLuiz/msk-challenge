import { createAction, createReducer } from '@reduxjs/toolkit';
import { IProduct, IProductResponse } from '../../interfaces/IProductResponse';
import api from '../../api/api';

interface IProductState {
    data: IProduct[];
};

let initialStateProduct: IProductState = {
    data: [],
};

export const getProducts = createAction('GET_PRODUCTS');
export const setAllProducts = createAction('SET_ALL_PRODUCTS');

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
