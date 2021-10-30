import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductProvider } from "./Products";
import { UserProvider } from "./User";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};
