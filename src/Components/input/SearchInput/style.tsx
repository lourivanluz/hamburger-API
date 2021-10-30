import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: fit-content;
  button {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 53px;
    height: 45px;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    background: var(--color-primary);
  }
`;

export const InputStyled = styled.input`
  width: 365px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid var(--grey1);
  outline: none;
  font-size: 19px;
  padding-left: 15px;
  &::placeholder {
    color: var(--grey1);
  }
`;
