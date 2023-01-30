import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import api from '../../api/api';
import buySVG from '../../assets/buy.svg';
import { increment, incrementAmount } from '../../features/counter/conter-slice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IProduct, IProductResponse } from '../../interfaces/IProductResponse';
import Skeleton from '../Skeleton';
import { BuyButton, Description, Header, Image, Item, ItemDetails, List, Section } from './styles';

const Products = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC';

  const count = useAppSelector(state => {
    return state.counter.value;
  });

  const productsSelector = useAppSelector(state => {
    return state.products.data[0]?.name;
  })

  const dispatch = useDispatch();

  function handleOnClick() {

    dispatch(increment());

    // increment();
    // dispatch({ type: 'counter/increment' });
  }

  function handleOnClickAmount() {

    dispatch(incrementAmount(5));

    // incrementAmount();
    // dispatch({ type: 'counter/incrementAmount', payload: 5 });
  }

  useEffect(() => {

    console.log(productsSelector)

    api.get<IProductResponse>(queryParamsAPI)
      .then(productsData => {
        console.log(productsData.data.products);
        setProducts(productsData.data.products);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      {
        products.length ? 
        <Section>  
          <List>
            {/* <Item>
              <button onClick={handleOnClick}>
                Increment
              </button>
              <div style={{
                margin: '10px 0px'
              }}>
                {count}
              </div>
              <button onClick={handleOnClickAmount}>
                Increment Amount
              </button>
            </Item> */}
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
                  <BuyButton>
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