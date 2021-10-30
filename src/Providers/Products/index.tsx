import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../Server/api";

interface product {
  id: string;
  name: string;
  price: number;
  type: string;
  img: string;
  quantity?: number;
  userId?: number;
}
interface ProductProviderProps {
  children: ReactNode;
}

interface ProductProviderData {
  products: product[];
  addProduct: (data: product) => void;
  deleteProduct: (idProduct: string) => void;
}

export const ProductContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<product[]>([] as product[]);
  const [token] = useState(localStorage.getItem("@tokenKH") || "");

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addProduct = (data: product) => {
    data.userId = 1;
    api
      .post("/products", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("adicionado produto novo"))
      .catch((err) => console.log("erro a cadastrar novo produto"));
  };

  const deleteProduct = (idProduct: string) => {
    api
      .delete(`/products/${idProduct}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("deletado"))
      .catch((err) => console.log("nao deletado"));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
