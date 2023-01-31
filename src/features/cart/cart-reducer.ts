import { createReducer, createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProductResponse";

interface IProductCart extends IProduct {
  quantity: number;
  priceInCart: number;
}

export const toggleCart = createAction("TOGGLE_CART");
export const addProductInCart = createAction<IProductCart>("ADD_PRODUCT_IN_CART");
export const removeProductInCart = createAction<{ id: number }>("REMOVE_PRODUCT_IN_CART");
export const incrementProductInCart = createAction<{ id: number }>("INCREMENT_PRODUCT_IN_CART");
export const decrementProductInCart = createAction<{ id: number }>("DECREMENT_PRODUCT_IN_CART");
export const incrementTotalValue = createAction("INCREMENT_TOTAL_VALUE");
export const decrementTotalValue = createAction<{ id: number }>("DECREMENT_TOTAL_VALUE");
export const setTotalOfItems = createAction("SET_TOTAL_OF_ITEMS");

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
  items: [
    {
      id: 1,
      brand: "Apple",
      name: "Smart Watch",
      description: "This is a smart watch",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
      price: '1000',
      priceInCart: 0,
      quantity: 1,
      createdAt: "2023-01-23T18:17:04.771Z",
      updatedAt: "2023-01-23T18:17:04.771Z",
    },
  ],
};

export const cartReducer = createReducer(INITIAL_STATE, {
  [toggleCart.type]: (state) => {
    state = { ...state, showCart: !state.showCart };
    return state;
  },
  [addProductInCart.type]: (state, action) => {
    const itemId = action.payload.id + state.items[state.items.length - 1].id;

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
        { ...action.payload, id: state.items.length + 1 },
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
