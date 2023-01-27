import { Section, BuyButton, Description, Header, Image, Item, ItemDetails, List } from "./styles";

const Skeleton = () => {

  const products: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Section>
      <List>
        { products.map(product => (
            <Item key={product}>
              <ItemDetails>
                <Image />
                <Header>
                  <h2></h2>
                </Header>
                <Description></Description>
                <BuyButton></BuyButton>
              </ItemDetails>
            </Item>
          ))
        }
      </List>
    </Section>
  );
};

export default Skeleton;