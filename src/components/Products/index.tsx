import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import buySVG from '../../assets/buy.svg';
import { CartActions } from '../../features/cart/cart-actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IProduct } from '../../interfaces/IProductResponse';
import { getAllProducts } from '../../store/fetchActions';
import Skeleton from '../Skeleton';
import { BuyButton, Description, Header, Image, Item, ItemDetails, List, Section } from './styles';

const Products = () => {

  const productsSelector = useAppSelector(state => {
    return state.products.data;
  });

  const {
    addProductInCart,
    setTotalOfItems,
    incrementTotalValue
  } = CartActions

  const dispatch = useDispatch() as any;

  useEffect(() => {

    dispatch(getAllProducts());
    console.log(productsSelector)


  }, []);


  function addProductToCart(product: IProduct) {
    dispatch(addProductInCart({...product, quantity: 1, priceInCart: Number(product.price)}));
    dispatch(setTotalOfItems());
    dispatch(incrementTotalValue());
  }

  return (
    <>
      {
        productsSelector.length ? 
        <Section>  
          <List>
            { productsSelector.map(product => (
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