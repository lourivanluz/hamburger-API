import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductProvider } from "./Products";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};
