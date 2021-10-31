import { useState } from "react";
import { DivCartCard, DivCountProduct } from "./style";
import { MdDelete } from "react-icons/md";
import { useCart } from "../../../Providers/Cart";

interface CartCardCardProps {
  item: {
    id: number;
    name: string;
    price: string;
    type: string;
    img: string;
    userId?: number;
  };
}

export const CartCard = ({ item }: CartCardCardProps) => {
  const { id, name, img } = item;
  const { cartList, addToCart, rmvToCart, rmvAllProducts } = useCart();
  const filtredItem = cartList.filter((item) => item.id === id);

  return (
    <DivCartCard>
      <div className="imgContainer">
        <img src={img} alt={`imagem ${name}`} />
      </div>
      <div className="midleContainer">
        <h2>{name}</h2>
        <DivCountProduct>
          <button onClick={() => addToCart(item)}>+</button>
          <span>{filtredItem.length}</span>
          <button onClick={() => rmvToCart(id)}>-</button>
        </DivCountProduct>
      </div>

      <MdDelete className="deleteIcon" onClick={() => rmvAllProducts(id)} />
    </DivCartCard>
  );
};
