import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { CartActions } from "../../features/cart/cart-actions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Amount, Aside, CloseButton, Content, DeleteItemButton, Name, FooterCart, Image, List, ListItem, Price } from "./styles";

const Cart = () => {

  const [animation, setAnimation] = useState('');

  const {
    toggleCart,
    removeProductInCart,
    setTotalOfItems,
    incrementProductInCart,
    incrementTotalValue,
    decrementProductInCart,
    decrementTotalValue
  } = CartActions;

  const show = useAppSelector(state => {
    return state.cart.showCart
  });

  useEffect(() => {
    if (show) {
      setAnimation('slide');
    }
  }, [show])

  const items = useAppSelector(state => {
    return state.cart.items;
  });

  const totalValueOfCart = useAppSelector( state => {
    return state.cart.totalValue;
  })

  const dispatch = useDispatch();

  function closeCart() {
    dispatch(toggleCart());
    setAnimation('hide');
  }

  function removeItemOfCart(id: number) {
    dispatch(removeProductInCart({ id }));
    dispatch(setTotalOfItems());
  }

  function incrementICartItem(id: number) {
    dispatch(incrementProductInCart({ id }));
    dispatch(incrementTotalValue())

  }

  function decrementICartItem(id: number) {
    dispatch(decrementProductInCart({ id }));
    dispatch(decrementTotalValue({ id }));
  }

  return (
    <>
      {
        <Aside animation={animation}>
          <Content>
            <div>
              <p>Carrinho de compras</p>
              <CloseButton data-testid="close-button" onClick={closeCart}>X</CloseButton>
            </div>
            <List>
              {
                items ? 
                items.map(item => (
                  <ListItem key={item.id}>
                    <div>
                      <Image src={item.photo} alt="" />
                    </div>
                    <Name>
                      { item.name }
                    </Name>
                    <Amount>
                      <p>Qtd:</p>
                      <div>
                        <button onClick={() => incrementICartItem(item.id)}>+</button>
                        <span>{ item.quantity }</span>
                        <button onClick={() => decrementICartItem(item.id)}>-</button>
                      </div>
                    </Amount>
                    <Price>
                      <NumericFormat value={Number(item.priceInCart)} thousandSeparator="." decimalSeparator=',' prefix='R$' displayType='text'/>
                    </Price>

                    <DeleteItemButton data-testid="remove-item-button" onClick={() => { removeItemOfCart(item.id) }}>
                      x
                    </DeleteItemButton>
                  </ListItem>
                ))
                 : null
              }
            </List>
            <FooterCart>
              <div>
                <p>
                  Total:
                </p>
                <span>
                  <NumericFormat value={Number(totalValueOfCart)} thousandSeparator="." decimalSeparator=',' prefix='R$' displayType='text'/>
                </span>
              </div>
              <button>
                Finalizar Compra
              </button>
            </FooterCart>
          </Content>
        </Aside>
      }
    </>    
  );
};

export default Cart;