import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: calc(101px + 116px);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, min(217.56px));
  gap: 22.44px;
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
    overflow: hidden;

    position: relative;
    ::after {

      position: absolute;
      top: 0;
      left: 0;

      transform: translateX(-100%);

      content: '';
      width: 100%;
      height: 100%;

      background-color: #c1c1c18e;

      animation-name: ${animation};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
    font-size: 1rem;
    color: #2C2C2C;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 14px;
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
  
  color: #FFF;
  background-color: #0F52BA;
  cursor: pointer;
`


export const Image = styled.div`

  position: relative;

  width: 100%;
  height: 138px;
  background-color: #cecece;
  border-radius: 4px;
  overflow: hidden;

  ::after {

    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(-100%);

    content: '';
    width: 100%;
    height: 100%;

    background-color: #c1c1c18e;

    animation-name: ${animation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;

  h2 {
    display: flex;
    align-items: center;
    height: 38px;
    border-radius: 4px;
    width: 100%;
    background-color: #cecece;
  }
`;



export const Description = styled.p`

  position: relative;

  background-color: #cecece;
  width: 100%;
  height: 25px;
  border-radius: 4px;
  margin-bottom: 12px;

  overflow: hidden;
  text-overflow: ellipsis;

  ::after {

    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(-100%);

    content: '';
    width: 100%;
    height: 100%;

    background-color: #c1c1c18e;

    animation-name: ${animation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
`;

