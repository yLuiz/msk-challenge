import { createAction, createReducer } from "@reduxjs/toolkit";
import api from '../../api/api';

export const loadAllProducts = createAction('LOAD_ALL_PRODUCTS');

const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC';

const INITIAL_STATE = {
    products: [],
}

export const getAllProducts = () => {
    return async (dispatch: any) => {
        try {
            const respoonse = await api.get(queryParamsAPI);
            return dispatch(loadAllProducts(respoonse.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export default createReducer(INITIAL_STATE, {
    [String(loadAllProducts)]: (state, action) => ({...state, products: action.payload})
});