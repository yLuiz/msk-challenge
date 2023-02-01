import { cartReducer } from './cart-reducer';
import { IProduct } from '../../interfaces/IProductResponse';
import { CartActions } from './cart-actions';

interface IProductCart extends IProduct {
  quantity: number;
  priceInCart: number;
}

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

const InMemoryProduct: IProductCart = {
  id: 4,
  name: "iPhone 12 64 GB",
  brand: "Apple",
  description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
  photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
  price: "6500.00",
  priceInCart: 6500,
  quantity: 1,
  createdAt: "2023-01-23T18:17:04.771Z",
  updatedAt: "2023-01-23T18:17:04.771Z"
}

const initialState = {
  showCart: false,
  totalOfItems: 1,
  items: [
    { ...InMemoryProduct },
  ],
  totalValue: Number(InMemoryProduct.price)
}

describe('Cart Reducer',() => {
  it('should add a product into cart', () => {
    const stateCart = cartReducer(undefined, addProductInCart({...InMemoryProduct}));
    expect(stateCart.items.length).toEqual(1);
  });

  it('should remove a product into cart', () => {
    const stateCart = cartReducer(initialState, removeProductInCart({ id: InMemoryProduct.id }));
    expect(stateCart.items.length).toEqual(0);
  });


  it('should increment a product already in cart', () => {
    const stateCart = cartReducer(initialState, incrementProductInCart({ id: InMemoryProduct.id }));
    expect(stateCart.items[0].quantity).toBeGreaterThan(1);
  });

  it('should decrement a product already in cart', () => {
    const newState = {
      ...initialState,
      items: [{...InMemoryProduct, quantity: 2}]
    }
    const stateCart = cartReducer(newState, decrementProductInCart({ id: InMemoryProduct.id }));
    expect(stateCart.items[0].quantity).toEqual(1);
  });

  it('should decrement a product that has only one quantity in cart', () => {
    const stateCart = cartReducer(initialState, decrementProductInCart({ id: InMemoryProduct.id }));
    expect(stateCart.items.length).toEqual(0);
  });

  it('should increment the total value in cart', () => {
    const stateCart = cartReducer(initialState, incrementTotalValue());
    expect(stateCart.totalValue).toEqual(InMemoryProduct.priceInCart);
  });

  it('should decrement the total value in cart', () => {
    const stateCart = cartReducer(initialState, decrementTotalValue({ id: InMemoryProduct.id }));
    expect(stateCart.totalValue).toEqual(0);
  });

  it('should set the total of items in cart', () => {

    const items = [
      {...InMemoryProduct},
      {...InMemoryProduct, id: 5}
    ]

    const stateCart = cartReducer({...initialState, items}, setTotalOfItems());

    expect(stateCart.totalOfItems).toBeGreaterThanOrEqual(2);
  });

  it('should turn false to true the showCart', () => {
    const stateCart = cartReducer(initialState, toggleCart());
    expect(stateCart.showCart).toEqual(true);
  });

  it('should turn true to false the showCart', () => {
    const stateCart = cartReducer({...initialState, showCart: true}, toggleCart());
    expect(stateCart.showCart).toEqual(false);
  });
})