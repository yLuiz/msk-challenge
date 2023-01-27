import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import api from '../../api/api';
import buySVG from '../../assets/buy.svg';
import { IProduct, IProductResponse } from '../../interfaces/IProductResponse';
import Skeleton from '../Skeleton';
import { BuyButton, Description, Header, Image, Item, ItemDetails, List, Section } from './styles';

const Products = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const queryParamsAPI = 'products?page=1&rows=10&sortBy=id&orderBy=ASC'

  useEffect(() => {
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