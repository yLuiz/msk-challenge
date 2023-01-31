import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import api from '../../api/api';
import buySVG from '../../assets/buy.svg';
import { addProductInCart, incrementTotalValue, setTotalOfItems, toggleCart } from '../../features/cart/cart-reducer';
import { getProducts } from '../../features/product/product-reducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IProduct, IProductResponse } from '../../interfaces/IProductResponse';
import Skeleton from '../Skeleton';
import { BuyButton, Description, Header, Image, Item, ItemDetails, List, Section } from './styles';

const Products = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC';

  const productsSelector = useAppSelector(state => {
    return state.products.data;
  });

  const showCart = useAppSelector(state => {
    return state.cart.showCart;
   });

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProducts());
    // api.get<IProductResponse>(queryParamsAPI)
    //   .then(productsData => {
    //     setProducts(productsData.data.products);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })

    setProducts(productsSelector)
  }, []);


  function addProductToCart(product: IProduct) {
    dispatch(addProductInCart({...product, quantity: 1, priceInCart: Number(product.price)}));
    dispatch(setTotalOfItems());
    dispatch(incrementTotalValue());
  }

  return (
    <>
      {
        products.length ? 
        <Section>  
          <List>
            { products.map(product => (
              <Item key={product.id}>
                <ItemDetails>
                  <div>
                    <Image src={product.photo} alt={product.name} />
                  </div>
                  <Header>
                    <h2>
                      { product.name } 
                    </h2>
                    <NumericFormat value={Number(product.price)} thousandSeparator="." decimalSeparator=',' prefix='R$' displayType='text'/>
                  </Header>
                  <Description>{product.description}</Description>
                  <BuyButton onClick={() => {addProductToCart(product)}}>
                    <img src={buySVG} alt="buy" />
                    Comprar
                  </BuyButton>
                </ItemDetails>
              </Item>
            ))}
          </List>
        </Section> : <Skeleton />
      }       
    </>
  );
};


export default Products;