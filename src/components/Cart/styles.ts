import styled from "styled-components";

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;

  max-width: 486px;

  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  background-color: #0F52BA;
  margin-left: 80px;

  z-index: 9;

  animation: ${(props: { animation: string }) => {
    if (props.animation === 'slide')
      return 'slide 1s forwards'
    else if (props.animation === 'hide')
      return 'hide 1s forwards';
  }};

  @keyframes slide {
    100% {
      transform: translateX(0px);
    }
  }

  @keyframes hide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
      display: none;
    }
  }
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

    @media (max-width: 330px) {
      font-size: 1.2rem;
      max-width: 100px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    margin-top: -10px;

    @media (max-width: 256px) {
      justify-content: center;
      flex-wrap: wrap;
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  padding-top: 20px;
  padding-bottom: 100px;
  margin-bottom: 100px;
  margin-top: -20px;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {

    background-color: #2e67bc;
    border-radius: 5px;
    border: 1px solid #c1e4ff;  
  }

  gap: 28px;

  @media(max-width: 470px) {
    padding: 10px 20px 140px;
  }
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

  @media (max-width: 418px) {
    flex-wrap: wrap;
    min-height: 200px;
  }

  @media (max-width: 330px) {
  }

`;

export const Image = styled.img`
  width: 50px;
  height: 61px;


  object-fit: contain;

  margin-left: 23px;
  margin-right: 21px;
`;

export const Name = styled.div`
  width: 133px;
  font-size: 0.813rem;

  margin-right: 9px;

  @media (max-width: 418px) {
    text-align: center;
  }
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: column;

  width: 50px;
  height: auto;

  margin-right: 20px;
  
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

  span {
    display: block;
    margin-top: 10px;
    min-width: 62px;
    font-weight: 700;
  }
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

    p, span {
      display: flex;
      align-items: center;
      margin: 0;
      height: 80px;
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

    cursor: pointer;
  }

  p, span, button {
    @media (max-width: 390px) {
      font-size: 1.2rem !important;
    }
  }
`;