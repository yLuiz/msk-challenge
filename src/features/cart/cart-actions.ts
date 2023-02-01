import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProductResponse";

interface IProductCart extends IProduct {
  quantity: number;
  priceInCart: number;
}

export const CartActions = {
  toggleCart: createAction("TOGGLE_CART"),
  addProductInCart: createAction<IProductCart>("ADD_PRODUCT_IN_CART"),
  removeProductInCart: createAction<{ id: number }>("REMOVE_PRODUCT_IN_CART"),
  incrementProductInCart: createAction<{ id: number }>("INCREMENT_PRODUCT_IN_CART"),
  decrementProductInCart: createAction<{ id: number }>("DECREMENT_PRODUCT_IN_CART"),
  incrementTotalValue: createAction("INCREMENT_TOTAL_VALUE"),
  decrementTotalValue: createAction<{ id: number }>("DECREMENT_TOTAL_VALUE"),
  setTotalOfItems: createAction("SET_TOTAL_OF_ITEMS"),
}