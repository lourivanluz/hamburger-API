import { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface product {
  id: number;
  name: string;
  price: string;
  type: string;
  img: string;
  quantity?: number;
}

interface cartContextData {
  cartList: product[];
  addToCart: (product: product) => void;
  rmvToCart: (idProduct: number) => void;
  rmvAllProductToCart: () => void;
  rmvAllProducts: (idProduct: number) => void;
}

export const CartContext = createContext<cartContextData>(
  {} as cartContextData
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<product[]>([] as product[]);

  const addToCart = (product: product) => {
    setCartList([...cartList, product]);
  };

  const newAddToCart = (product: product) => {
    const [filtred] = cartList.filter((item) => item.id === product.id);
    const newlist = cartList.filter((item) => item.id !== product.id);

    if (filtred.quantity) {
      filtred.quantity += 1;
    } else {
      filtred.quantity = 1;
    }
    setCartList([...newlist, filtred]);
  };

  const rmvToCart = (idProduct: number) => {
    const newCartList = cartList
      .filter((item) => item.id === idProduct)
      .slice(1);
    const filtred = cartList.filter((item) => item.id !== idProduct);
    setCartList([...filtred, ...newCartList]);
  };

  const rmvAllProducts = (idProduct: number) => {
    const newCartList = cartList.filter((item) => item.id !== idProduct);
    setCartList(newCartList);
  };

  const rmvAllProductToCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        rmvToCart,
        rmvAllProductToCart,
        rmvAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
