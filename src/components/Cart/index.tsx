import { useEffect, useState } from "react";
import { Aside, CloseButton } from "./styles";

const Cart = () => {

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <>
      {
        show ? <Aside>

        <div>
          <p>Carrinho de compras</p>
          <CloseButton>X</CloseButton>
        </div>
  
        </Aside> : <></>
      }
    </>    
  );
};

export default Cart;