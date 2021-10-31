import styled from "styled-components";

export const DivCartContainer = styled.div`
  width: 500px;

  .headerCart {
    height: 55px;
    background-color: var(--color-primary);
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 13px 23px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    button {
      background-color: transparent;
      border: none;
      font-size: 20px;
      display: flex;
      padding: 5px;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .bodyCart {
    background-color: var(--grey0);
    height: fit-content;
    min-height: 200px;
    padding: 0 20px 20px 20px;
    h3 {
      text-align: center;
      font-weight: 700;
      font-size: 18px;
      padding-top: 50px;
      color: var(--grey6);
    }
    p {
      text-align: center;
      font-size: 14px;
      color: var(--grey3);
      margin-top: 17px;
    }
    .priceContainer {
      margin: 15px 0;
      display: flex;
      justify-content: space-between;
      .price {
        color: var(--grey3);
      }
    }
  }
`;

export const ModalCart = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  background-color: rgba(51, 51, 51, 0.5);
  justify-content: center;
  padding-top: 80px;
`;
