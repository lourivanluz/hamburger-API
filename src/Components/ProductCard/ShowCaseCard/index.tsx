import { useCart } from "../../../Providers/Cart";
import { Button } from "../../Button";
import { SCCardContainer } from "./style";

interface ShowCaseCardProps {
  item: {
    id: number;
    name: string;
    price: string;
    type: string;
    img: string;
    userId: number;
  };
}

export const ShowCaseCard = ({ item }: ShowCaseCardProps) => {
  const { id, name, type, price, img } = item;

  const { addToCart, cartList, rmvToCart } = useCart();

  return (
    <SCCardContainer>
      <div className="imgContainer">
        <img src={img} alt={`imagem de um ${name}`} />
      </div>
      <div className="textContainer">
        <h2>{name}</h2>
        <p>{type}</p>
        <p className="price"> {`R$ ${price}`}</p>
        <Button
          fontColor="white"
          backGroundColor={"var(--color-primary)"}
          width={106}
          height={40}
          onClick={() => addToCart(item)}
        >
          Adicionar
        </Button>
      </div>
      <button onClick={() => rmvToCart(id)}>delete1</button>
    </SCCardContainer>
  );
};
