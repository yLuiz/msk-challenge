import { cartReducer } from './cart-reducer';
import { IProduct } from '../../interfaces/IProductResponse';
import { CartActions } from './cart-actions';

const { 
  addProductInCart, 
  removeProductInCart,
  incrementProductInCart,
  decrementProductInCart,
  incrementTotalValue,
  decrementTotalValue,
  setTotalOfItems,
  toggleCart
} = CartActions;


describe('Cart Actions',() => {
  it('should be type ADD_PRODUCT_IN_CART', () => {
    expect(addProductInCart.type).toBe('ADD_PRODUCT_IN_CART');
  });

  it('should be type REMOVE_PRODUCT_IN_CART', () => {
    expect(removeProductInCart.type).toBe('REMOVE_PRODUCT_IN_CART');
  });

  it('should be type INCREMENT_PRODUCT_IN_CART', () => {
    expect(incrementProductInCart.type).toBe('INCREMENT_PRODUCT_IN_CART');
  });

  it('should be type DECREMENT_PRODUCT_IN_CART', () => {
    expect(decrementProductInCart.type).toBe('DECREMENT_PRODUCT_IN_CART');
  });

  it('should be type INCREMENT_TOTAL_VALUE', () => {
    expect(incrementTotalValue.type).toBe('INCREMENT_TOTAL_VALUE');
  });

  it('should be type DECREMENT_TOTAL_VALUE', () => {
    expect(decrementTotalValue.type).toBe('DECREMENT_TOTAL_VALUE');
  });

  it('should be type SET_TOTAL_OF_ITEMS', () => {
    expect(setTotalOfItems.type).toBe('SET_TOTAL_OF_ITEMS');
  });

  it('should be type TOGGLE_CART', () => {
    expect(toggleCart.type).toBe('TOGGLE_CART');
  });
})