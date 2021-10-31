import styled from "styled-components";

export const DivCartCard = styled.div`
  height: 100px;
  display: flex;
  position: relative;
  border-bottom: 2px solid var(--grey1);
  padding-top: 20px;

  .imgContainer {
    width: 80px;
    height: 80px;
    background-color: var(--grey1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    img {
      height: 60px;
    }
  }
  .midleContainer {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    h2 {
      color: var(--grey6);
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
  .deleteIcon {
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 15px;
    color: var(--grey3);
    cursor: pointer;
  }
`;

export const DivCountProduct = styled.div`
  width: 110px;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: var(--grey1);
  button {
    border: none;
    width: 30px;
    height: 100%;
    color: red;
    background-color: transparent;
  }
  span {
    background-color: var(--grey0);
    display: block;
    height: 30px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
