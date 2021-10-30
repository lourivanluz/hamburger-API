import { useState } from "react";

interface CartCardCardProps {
  item: {
    id: number;
    name: string;
    price: string;
    type: string;
    img: string;
    userId: number;
  };
}

export const CartCard = ({ item }: CartCardCardProps) => {
  const { id, name, img } = item;
  const [count, setCount] = useState(1);

  const handleClick = (type: string) => {
    if (type === "add") {
      setCount(count + 1);
    }
    if (type !== "add" && count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <img src={img} alt={`imagem ${name}`} />
        <h2>{name}</h2>
        <button onClick={() => handleClick("add")}>add</button>
        <span>{count}</span>
        <button onClick={() => (count === 0 ? "deleta" : handleClick("rmv"))}>
          rmv
        </button>
        <button>x</button>
      </div>
    </div>
  );
};
