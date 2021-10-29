import styled from "styled-components";

interface InputProps {
  backgroundColor?: string;
  error?: boolean;
}

export const InputStyled = styled.input`
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "40px" }) => height};
  margin-bottom: 20px;
  border-radius: 8px;
  padding-left: 15px;
  background-color: ${({ backgroundColor = "var(--grey0)" }: InputProps) =>
    backgroundColor};
  border: 1px solid var(--grey6);
  color: ${({ color = "var(--grey6)" }) => color};
  font-size: 19px;

  &:hover {
    border-color: gray;
  }
  &:focus {
    outline: none;
    border: 1px solid;
    border-color: ${({ error = false }: InputProps) =>
      error ? "var(--negativeColor)" : "var(--primary-Color)"};
  }
  &:focus::placeholder {
    color: transparent;
  }

  &:focus + label {
    display: block;
    background-color: ${({ backgroundColor = "white" }: InputProps) =>
      backgroundColor};
    position: absolute;
    padding: 0 5px;
    color: ${({ error = false }) =>
      error ? "var(--negativeColor)" : "var(--grey5)"};
    font-size: 15px;
    left: 10px;
    top: -10px;
  }
  &:required:valid + label {
    display: block;
    background-color: ${({ backgroundColor = "white" }: InputProps) =>
      backgroundColor};
    padding: 0 5px;
    position: absolute;
    color: ${({ error = false }) =>
      error ? "var(--negativeColor)" : "var(--sucess)"};
    font-size: 12px;
    left: 10px;
    top: -10px;
  }

  &:required:valid {
    border: 2px solid;
    border-color: ${({ error = false }) =>
      error ? "var(--negativeColor)" : "var(--sucess)"};
  }
`;
