import { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface product {
  id: string;
  name: string;
  price: number;
  type: string;
  img: string;
  quantity?: number;
}

interface cartContextData {
  cartList: product[];
  addToCart: (product: product) => void;
  rmvToCart: (idProduct: string) => void;
  rmvAllProductCart: () => void;
  switchQuantity: (product: product, type: string) => void;
}

export const CartContext = createContext<cartContextData>(
  {} as cartContextData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<product[]>(
    JSON.parse(localStorage.getItem("@CartKH") || "") || ([] as product[])
  );

  const addToCart = (product: product) => {
    //logica de procurar se existe o produto na lista
    // se nao existe colocar na lista com quantidade 1
    //se existir adiciona 1 a quantidade.
    const [newProduct] = cartList.filter((item) => item.id === product.id);

    if (newProduct.quantity) {
      newProduct.quantity += 1;
      setCartList([...cartList, newProduct]);
    } else {
      product.quantity = 1;
      setCartList([...cartList, product]);
    }
  };

  const switchQuantity = (product: product, type: string) => {
    let { quantity } = product;
    if (quantity) {
      if (type === "add") quantity += 1;
      if (type !== "add" && quantity > 0) quantity -= 1;
    }
  };

  const rmvToCart = (idProduct: string) => {
    const newCartList = cartList.filter((item) => item.id !== idProduct);
    setCartList(newCartList);
  };

  const rmvAllProductCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        rmvToCart,
        rmvAllProductCart,
        switchQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
