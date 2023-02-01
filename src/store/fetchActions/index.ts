import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api/api';
import { ProductActions } from '../../features/product/product-actions';

const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC';

const { setAllProducts } = ProductActions;

export const getAllProducts = () => {
    return (dispacth: Dispatch) => {
        api.get(queryParamsAPI)
            .then(response => {
                dispacth(setAllProducts(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}