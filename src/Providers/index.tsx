import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <CartProvider>{children}</CartProvider>;
};
