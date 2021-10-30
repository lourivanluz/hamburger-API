import { useState } from "react";
import { Redirect } from "react-router";
import { SearchInput } from "../../Components/input/SearchInput";
import { Logo } from "../../Components/LogoCard/Logo";
import { useUser } from "../../Providers/User";
import { HeaderStyled } from "./style";
import { ImCart } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { ShowCaseCard } from "../../Components/ProductCard/ShowCaseCard";
import { Cart } from "../../Components/Cart";
import { useCart } from "../../Providers/Cart";

export const Home = () => {
  const { auth } = useUser();
  const [search, setSearch] = useState("");
  const { cartList } = useCart();

  if (!auth) return <Redirect to="/register" />;

  const list = [
    {
      id: 3,
      name: "Combão bão",
      price: "25.50",
      type: "combo",
      img: "https://www.pikpng.com/pngl/m/461-4616485_hamburguer-com-fritas-png-trio-sanduiche-clipart.png",
      userId: 1,
    },
    {
      id: 2,
      name: "X-Burgao pus",
      price: "20.50",
      type: "sanduiches",
      img: "https://imagensemoldes.com.br/wp-content/uploads/2020/04/PNG-Sanduiche-1024x755.png",
      userId: 1,
    },
  ];

  return (
    <div>
      <HeaderStyled>
        <div className="headerContainer">
          <div className="logoContainer">
            <Logo />
          </div>
          <div className="rightDiv">
            <SearchInput
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <ImCart className="icon-header iconCart" />
            <Cart cartList={cartList} />
            <FiLogOut className="icon-header iconLogout" />
          </div>
        </div>
      </HeaderStyled>
      <main>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <ShowCaseCard item={item} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
