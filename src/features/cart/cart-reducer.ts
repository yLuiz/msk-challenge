import { createReducer, createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProductResponse";
import { CartActions } from "./cart-actions";

interface IProductCart extends IProduct {
  quantity: number;
  priceInCart: number;
}

const {
  addProductInCart,
  decrementProductInCart,
  decrementTotalValue,
  incrementProductInCart,
  incrementTotalValue,
  removeProductInCart,
  setTotalOfItems,
  toggleCart
} = CartActions;

interface InitialState {
  showCart: boolean;
  totalValue: number;
  totalOfItems: number;

  items: IProductCart[];
}

const INITIAL_STATE: InitialState = {
  showCart: false,
  totalValue: 0,
  totalOfItems: 0,
  items: [],
};

export const cartReducer = createReducer(INITIAL_STATE, {
  [toggleCart.type]: (state) => {
    state = { ...state, showCart: !state.showCart };
    return state;
  },
  [addProductInCart.type]: (state, action) => {
    const itemId = action.payload.id;

    const alreadyInCart = state.items
      .map((item) => {
        return item.id === itemId;
      })
      .filter((item) => item)[0];

    if (alreadyInCart) return state;

    state = {
      ...state,
      items: [
        ...state.items,
        { ...action.payload },
      ],
    };
    return state;
  },
  [removeProductInCart.type]: (state, action) => {
    const removedItem = state.items.filter(item => item.id === action.payload.id)[0];
    state.totalValue -= removedItem.priceInCart;
    state.items = state.items.filter((item) => item.id !== action.payload.id);

    return state;
  },
  [incrementProductInCart.type]: (state, action) => {
    const itemId = action.payload.id;
    state.items.forEach((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
        item.priceInCart = Number(item.price) * item.quantity;
      }
    });

    return state;
  },
  [decrementProductInCart.type]: (state, action) => {
    const itemId = action.payload.id;
    state.items.forEach((item) => {
      if (item.id === itemId) {
        if (item.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
          state.totalValue -= Number(item.price);
        } else {
          item.quantity -= 1;
          item.priceInCart -= Number(item.price);
        }
      }
    });

    return state;
  },
  [setTotalOfItems.type]: (state) => {
    state = {
      ...state,
      totalOfItems: state.items.length,
    };
    return state;
  },
  [incrementTotalValue.type]: (state) => {
    state = {...state, totalValue: 0}

    state.items.forEach(item => {
        state.totalValue += item.priceInCart;
    });

    return state;
  },

  [decrementTotalValue.type]: (state, action) => {
    const currentItem = state.items.filter(item => item.id == action.payload.id)[0];
    
    if (currentItem)
        state.totalValue -= Number(currentItem.price);

    return state;
  }
});
