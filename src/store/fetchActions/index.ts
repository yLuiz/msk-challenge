import { Dispatch } from '@reduxjs/toolkit';
import api from '../../api/api';
import { setAllProducts } from '../../features/product/product-reducer';

const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC';

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