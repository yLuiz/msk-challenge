import { productReducer } from './product-reducer';
import { IProduct } from '../../interfaces/IProductResponse';
import { ProductActions } from './product-actions';

const { 
  getProducts,
  setAllProducts
} = ProductActions;


describe('Product Actions',() => {
  it('should be type GET_PRODUCTS', () => {
    expect(getProducts.type).toBe('GET_PRODUCTS');
  });

  it('should be type SET_ALL_PRODUCTS', () => {
    expect(setAllProducts.type).toBe('SET_ALL_PRODUCTS');
  });
})