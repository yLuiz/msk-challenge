import { Link } from 'react-router-dom'
import { Nav, CartButton } from './styles';
import cartLogo from '../../assets/cart.svg';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../features/cart/cart-actions';
import { useAppSelector } from '../../hooks/useAppSelector';

const Navbar = () => {

  const { toggleCart } = CartActions;
  const dispatch = useDispatch();
  const totalOfItemsInCart = useAppSelector(state => {
    return state.cart.totalOfItems;
  })

  function showCart() {
    dispatch(toggleCart());
  }

  return (
    <Nav>
      <div>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>

      <CartButton onClick={showCart}>
        <img src={cartLogo} alt="" />
        <p>{totalOfItemsInCart}</p>
      </CartButton>
    </Nav>
  );
};

export default Navbar;