import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fontColor: string;
  backGroundColor: string;
  width: number;
  height: number;
}

export const Button = ({ children, ...ress }: ButtonProps) => {
  return <ButtonStyled {...ress}>{children}</ButtonStyled>;
};
