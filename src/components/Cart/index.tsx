import { useEffect, useState } from "react";
import { Amount, Aside, CloseButton, Content, DeleteItemButton, Description, FooterCart, Image, List, ListItem, Price } from "./styles";

const Cart = () => {

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <>
      {
        show ? 
        <Aside>
          <Content>
            <div>
              <p>Carrinho de compras</p>
              <CloseButton onClick={() => {setShow(false)}} >X</CloseButton>
            </div>
            <List>
              <ListItem>
                <div>
                  <Image src="" alt="" />
                </div>
                <Description>
                  Apple Watch Series 4 GPS
                </Description>
                <Amount>
                  <p>Qtd:</p>
                  <div>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                  </div>
                </Amount>
                <Price>
                  R$100
                </Price>

                <DeleteItemButton>
                  x
                </DeleteItemButton>

              </ListItem>
            </List>
            <FooterCart>
              <div>
                <p>
                  Total:
                </p>
                <span>
                  R$100
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