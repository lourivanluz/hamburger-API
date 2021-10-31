import { ModalCart, DivCartContainer } from "./style";
import { RiCloseFill } from "react-icons/ri";
import { CartCard } from "../ProductCard/CartCard";
import { Button } from "../Button";
import { useCart } from "../../Providers/Cart";

interface product {
  id: number;
  name: string;
  price: string;
  type: string;
  img: string;
  quantity?: number;
}

interface CartListProps {
  cartList: product[];
  setShowCart: (value: React.SetStateAction<boolean>) => void;
}

export const Cart = ({ cartList, setShowCart }: CartListProps) => {
  const cartFiltred = cartList.filter((item, index, array) => {
    return array.map((item) => item.id).indexOf(item.id) === index;
  });

  const { rmvAllProductToCart } = useCart();

  const price = cartList.reduce((acc, item) => Number(item.price) + acc, 0);

  return (
    <ModalCart>
      <DivCartContainer>
        <div className="headerCart">
          <h3>Carrinho de compras</h3>
          <button onClick={() => setShowCart(false)}>
            <RiCloseFill />
          </button>
        </div>
        <div className="bodyCart">
          {cartFiltred.length === 0 && (
            <>
              <h3>Sua sacola está vazia</h3>
              <p>adicione itens </p>
            </>
          )}
          {cartFiltred.length !== 0 && (
            <>
              <ul>
                {cartFiltred.map((item, index) => (
                  <li key={index}>
                    <CartCard item={item} />
                  </li>
                ))}
              </ul>
              <div className="priceContainer">
                <span>Total</span>
                <span className="price">{`R$ ${price.toFixed(2)}`}</span>
              </div>
              <Button
                fontColor={"var(--grey3)"}
                backGroundColor={"var(--grey1)"}
                width={460}
                height={60}
                onClick={rmvAllProductToCart}
              >
                Remover todos
              </Button>
            </>
          )}
        </div>
      </DivCartContainer>
    </ModalCart>
  );
};
