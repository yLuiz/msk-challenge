import { Link } from 'react-router-dom'
import { Nav, CartButton } from './styles';
import cartLogo from '../../assets/cart.svg';

const Navbar = () => {
  return (
    <Nav>
      <div>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>

      <CartButton>
        <img src={cartLogo} alt="" />
        <p>0</p>
      </CartButton>
    </Nav>
  );
};

export default Navbar;