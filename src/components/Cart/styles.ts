import styled, { keyframes } from "styled-components";

const slide = keyframes`
  100% {
    /* max-width: 486px; */
    transform: translateX(0px);

  }
`;

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;

  /* max-width: 0px; */
  max-width: 486px;
  

  width: 100%;
  height: 100%;
  transform: translateX(100%);
  background-color: #0F52BA;

  z-index: 9;
  animation: ${slide} 1s forwards;
`;

export const Content = styled.div`

  position: relative;

  display: flex;
  flex-direction: column;

  height: 100%;

  p {
    color: #FFF;
    font-size: 1.688rem;
    font-weight: 700;
    width: 180px;
    margin: 36px 47px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  color: #FFF;
  background-color: #000;

  margin-right: 22px;
  width: 38px;
  height: 38px;

  border: none;
  border-radius: 100%;

  cursor: pointer;

`;

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  padding-top: 20px;
  /* border: 1px solid #000; */
  margin-bottom: 1000px;

  min-height: 600px;
  overflow: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {

    background-color: #2e67bc;    /* color of the scroll thumb */
    border-radius: 5px;       /* roundness of the scroll thumb */
    border: 1px solid #c1e4ff;  /* creates padding around scroll thumb */
  }

  gap: 28px;
`;

export const ListItem = styled.li`

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 19px 23px !important;

  margin: 0;

  background-color: #FFF;
  border-radius: 8px;
  max-width: 379px;
  width: 100%;
  min-height: 95px;
  padding: 0;

  list-style: none;

`;

export const Image = styled.img`
  border: 1px solid black;
  min-width: 50px;
  min-height: 61px;

  margin-left: 23px;
  margin-right: 21px;
`;

export const Description = styled.div`
  max-width: 133px;
  font-size: 0.813rem;

  margin-right: 9px;
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: column;

  width: 50px;
  height: auto;

  margin-right: 40px;
  
  p {
    padding: 0;
    margin: 0;
    font-size: 0.313rem;
    color: #000;
    margin-bottom: 4px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0.3px solid #BFBFBF;

    background-color: #FFF;
    border-radius: 4px;

    span {
      display: flex;
      align-items: center;
      height: 19px;
      font-size: 0.5rem;

      margin: 0 5px;
    }


    button {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.7rem;
      padding: 0;
      height: 11px;
      width: 17px;
      cursor: pointer;
    }

    button {
      :nth-of-type(1) {
        border: none;
        background-color: transparent;
        border-right: 0.3px solid #BFBFBF;
      }

      :nth-of-type(2) {
        border: none;
        background-color: transparent;
        border-left: 0.3px solid #BFBFBF;
      }
    }

  }
`;

export const Price = styled.div`
  width: 62px;
  margin-right: 15px;
  font-weight: 700;
`;

export const DeleteItemButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;

  width: 18px;
  height: 18px;
  padding: 12px;

  border: none;
  border-radius: 100%;
  background-color: #000;
  color: #FFF;

  cursor: pointer;
`;

export const FooterCart = styled.footer`

  position: absolute;
  bottom: 0;
  
  width: 100%;

  div {

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #0F52BA;
    box-shadow: 0 15px 15px #000;

    p, span {
      margin: 0;
      margin-bottom: 42px;
      padding: 0;
      color: #FFF;
    }

    span {
      font-weight: 700;
      font-size: 1.75rem;
    }

  }


  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.75rem;

    border: none;
    
    background-color: #000;
    color: #FFF;
    height: 97px;
    width: 100%;
  }
`;