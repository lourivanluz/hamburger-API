import { number } from "yup/lib/locale";
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
}

export const Cart = ({ cartList }: CartListProps) => {
  const dados = cartList.filter((item, pos, array) => {
    return array.map((item) => item.id).indexOf(item.id) === pos;
  });

  console.log(dados);

  return (
    <div>
      <span>total:</span>
    </div>
  );
};
