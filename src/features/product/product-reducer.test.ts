import { ProductActions } from './product-actions';
import { productReducer } from './product-reducer';

const { 
  getProducts,
  setAllProducts
} = ProductActions;

const initialState = {
  data: []
}

let products = [
  {
    id: 6,
    name: "iPad",
    brand: "Apple",
    description: "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
    price: "4200.00",
    createdAt: "2023-01-23T18:17:04.771Z",
    updatedAt: "2023-01-23T18:17:04.771Z"
  },
  {
    id: 5,
    name: "Apple Watch Series 7",
    brand: "Apple",
    description: "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
    price: "3200.00",
    createdAt: "2023-01-23T18:17:04.771Z",
    updatedAt: "2023-01-23T18:17:04.771Z"
  },
  {
    id: 4,
    name: "iPhone 12 64 GB",
    brand: "Apple",
    description: "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
    price: "6500.00",
    createdAt: "2023-01-23T18:17:04.771Z",
    updatedAt: "2023-01-23T18:17:04.771Z"
  }
];

describe('Product Reducer', () => {
  it('should set the products getted by API Request', () => {
    const stateProduct = productReducer(initialState, setAllProducts({ products }));
    expect(stateProduct.data.length).toBeGreaterThan(1);
  });

  it('should get the products getted by API Request', () => {
    const stateProduct = productReducer({...initialState, data: products }, getProducts());
    expect(stateProduct.data.length).toBeGreaterThan(1);
  });
})