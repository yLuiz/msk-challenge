import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const List = styled.ul`
  display: grid;
  
  grid-template-columns: repeat(4, min(217.56px));
  gap: 22.44px;
  margin-top: calc(101px + 116px);
  padding: 0;

  @media (max-width: 1027px) {

    max-width: 90vw;
    grid-template-columns: repeat(auto-fit, min(217.56px));
  }

`

export const Item = styled.li`
  position: relative;
  max-width: 300px;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  height: 285px;
  padding-top: 18px;

  overflow: hidden;

  h2 {
    font-size: 1rem;
    color: #2C2C2C;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 14px;
  text-overflow: ellipsis;
`

export const BuyButton = styled.button`

  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  width: 100%;
  height: 31.91px;
  border: none;
  outline: none;

  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  
  color: #FFF;
  background-color: #0F52BA;
  cursor: pointer;
`

export const Image = styled.img`
  height: 138px;
`

export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 0.63rem;
  color: #2C2C2C;
  width: 100%;
  height: 25px;
  margin-bottom: 12px;

  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;

  h2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 124px;
    height: 38px;
    font-weight: 400;
    color: #2C2C2C;
  }

  span {
    display: flex;
    align-items: center;
    height: 26px;
    font-weight: 700;
    font-size: 0.938rem;
    color: #FFF;
    background-color: #373737;
    border-radius: 5px;
    padding: 4px 7px;
  }
`;