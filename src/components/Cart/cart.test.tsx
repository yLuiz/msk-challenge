import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Cart from ".";
import { store } from "../../store/store";
import { cartReducer } from "../../features/cart/cart-reducer";
import { IProduct } from "../../interfaces/IProductResponse";
import { CartActions } from'../../features/cart/cart-actions';
import { ListItem } from "./styles";

interface IProductCart extends IProduct {
    quantity: number;
    priceInCart: number;
}

const {
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

describe("Cart", () => {
    it("should render Finalizar Compra on button", () => {
        const { getByText } = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );
    
        expect(getByText('Finalizar Compra')).toBeTruthy();
    });

    it("should open cart on click", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        const stateCart = cartReducer({...initialState, showCart: false}, toggleCart());

        const closeButton = getByTestId('close-button');

        userEvent.click(closeButton);
    
        expect(stateCart.showCart).toBe(true);
    });

    it("should close cart on click", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        const stateCart = cartReducer({...initialState, showCart: true}, toggleCart());

        const closeButton = getByTestId('close-button');

        userEvent.click(closeButton);

        expect(stateCart.showCart).toBe(false);
    });
});