import { createAction, createReducer } from '@reduxjs/toolkit';
import { IProduct, IProductResponse } from '../../interfaces/IProductResponse';
import api from '../../api/api';

interface IProductState {
    data: IProduct[];
};

let initialStateProduct: IProductState = {
    data: [
        {
            id: 1,
            brand: 'Apple',
            name: 'Apple Watch Series 4 GPS',
            description: 'This is a smart watch',
            photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
            price: '1000',
            createdAt: "2023-01-23T18:17:04.771Z",
            updatedAt: "2023-01-23T18:17:04.771Z"
        }
    ],
};

export const getProducts = createAction('GET_PRODUCTS');
export const setAllProducts = createAction('SET_ALL_PRODUCTS');

export const productReducer = createReducer(initialStateProduct, {
    [getProducts.type]: (state) => {
        return state;
    },
    [setAllProducts.type]: (state, action) => {

        // console.log(action.payload.products);

        state = {
            ...state,
            data: action.payload.products
        }

        return state;
    }
});
