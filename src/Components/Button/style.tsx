import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor: string;
  backGroundColor: string;
  width: number;
  height: number;
}
export const ButtonStyled = styled.button`
  background-color: ${({ backGroundColor }: ButtonProps) => backGroundColor};
  color: ${({ fontColor }: ButtonProps) => fontColor};
  width: ${({ width }: ButtonProps) => width}px;
  height: ${({ height }: ButtonProps) => height}px;
  border: none;
  border-radius: 8px;
`;
