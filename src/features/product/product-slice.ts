import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { useEffect } from 'react';
import { IProduct, IProductResponse } from '../../interfaces/IProductResponse';

import api from '../../api/api';

interface IProductState {
    data: IProduct[];
};

let initialStateProduct: IProductState = {
    data: [],
};

const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC';


api.get<IProductResponse>(queryParamsAPI)
    .then(productsData => {
        initialStateProduct.data = productsData.data.products
        console.log(productsData.data.products);
    })
    .catch(error => {
        console.log(error);
    })


export const productSlice = createSlice({
    name: 'counter',
    initialState: initialStateProduct,
    reducers: {
        incrementAmount: (state, action: PayloadAction<number>) => {
            
        }
    }
});

export const { incrementAmount } = productSlice.actions;
export const productReducer = productSlice.reducer;