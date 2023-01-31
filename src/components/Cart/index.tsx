import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decrementProductInCart, incrementProductInCart, removeProductInCart, setTotalOfItems, toggleCart } from "../../features/cart/cart-reducer";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Amount, Aside, CloseButton, Content, DeleteItemButton, Description, FooterCart, Image, List, ListItem, Price } from "./styles";

const Cart = () => {
  const show = useAppSelector(state => {
    return state.cart.showCart
  });

  const items = useAppSelector(state => {
    return state.cart.items;
  });

  const totalValueOfCart = useAppSelector( state => {
    return state.cart.totalValue;
  })

  const dispatch = useDispatch();

  function closeCart() {
    dispatch(toggleCart());
  }

  function removeItemOfCart(id: number) {
    dispatch(removeProductInCart({ id }));
    dispatch(setTotalOfItems());
  }

  function incrementICartItem(id: number) {
    dispatch(incrementProductInCart({ id }));

  }

  function decrementICartItem(id: number) {
    dispatch(decrementProductInCart({ id }));
  }

  return (
    <>
      {
        show ? 
        <Aside>
          <Content>
            <div>
              <p>Carrinho de compras</p>
              <CloseButton onClick={closeCart}>X</CloseButton>
            </div>
            <List>
              {
                items ? 
                items.map(item => (
                  <ListItem key={item.id}>
                  <div>
                    <Image src="" alt="" />
                  </div>
                  <Description>
                    { item.description }
                  </Description>
                  <Amount>
                    <p>Qtd:</p>
                    <div>
                      <button onClick={() => incrementICartItem(item.id)}>+</button>
                      <span>{ item.quantity }</span>
                      <button onClick={() => decrementICartItem(item.id)}>-</button>
                    </div>
                  </Amount>
                  <Price>
                    R${ item.price }
                  </Price>

                  <DeleteItemButton onClick={() => { removeItemOfCart(item.id) }}>
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
                  R${totalValueOfCart}
                </span>
              </div>
              <button>
                Finalizar Compra
              </button>
            </FooterCart>
          </Content>
        </Aside> : <></>
      }
    </>    
  );
};

export default Cart;