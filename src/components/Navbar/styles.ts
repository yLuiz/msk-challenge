import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;

  z-index: 8;

  width: 100%;
  height: 101px;
  background-color: #0F52BA;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0;

  div {
    display: flex;
    align-items: flex-start;
    height: 44px;
    margin: 0;
    margin-left: 65px;

    @media (max-width: 514px) {
      margin-left: 20px;
    }

  }

  h1, span {
    color: #FFF;
    margin: 0;
    padding: 0;
  };

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
  }

  span {
    align-self: flex-end;
    margin-left: 5px;
    margin-bottom: 2px;
    font-weight: 300 !important;
    font-size: 1.25rem;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 88px;

  gap: 1em;
  
  background-color: #FFF;
  width: 90px;
  height: 45px;

  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 514px) {
    margin-right: 10px;
  }
`;