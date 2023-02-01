import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProductResponse";

export const ProductActions = {
  getProducts: createAction('GET_PRODUCTS'),
  setAllProducts: createAction<{ products: IProduct[] }>('SET_ALL_PRODUCTS'),
}


