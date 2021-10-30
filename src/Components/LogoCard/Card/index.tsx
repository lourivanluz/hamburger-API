import { FiShoppingBag } from "react-icons/fi";
import { CardContainer } from "./style";

export const Card = () => {
  return (
    <CardContainer>
      <div className="iconContainer">
        <FiShoppingBag />
      </div>
      <div className="textContainer">
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os
          <span>melhores</span>
          ingredientes.
        </p>
      </div>
    </CardContainer>
  );
};
