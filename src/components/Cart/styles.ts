import styled, { keyframes } from "styled-components";

const slide = keyframes`
  100% {
    max-width: 486px;
  }
`;

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;

  max-width: 0px;
  width: 100%;
  height: 100%;
  background-color: #0F52BA;

  z-index: 9;

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

  animation: ${slide} 1s forwards;
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