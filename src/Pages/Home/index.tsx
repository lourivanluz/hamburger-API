import { useState } from "react";
import { Redirect } from "react-router";
import { SearchInput } from "../../Components/input/SearchInput";
import { Logo } from "../../Components/LogoCard/Logo";
import { useUser } from "../../Providers/User";
import { HeaderStyled, MainStyled } from "./style";
import { ImCart } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { ShowCaseCard } from "../../Components/ProductCard/ShowCaseCard";
import { Cart } from "../../Components/Cart";
import { useCart } from "../../Providers/Cart";
import { useProduct } from "../../Providers/Products";

export const Home = () => {
  const { auth, logout } = useUser();
  const { cartList } = useCart();
  const { productsFilter } = useProduct();
  const [showCart, setShowCart] = useState(false);
  if (!auth) return <Redirect to="/login" />;

  return (
    <div>
      <HeaderStyled>
        <div className="headerContainer">
          <div className="logoContainer">
            <Logo />
          </div>
          <div className="rightDiv">
            <SearchInput />
            <div className="cartContainer">
              <ImCart
                className="icon-header iconCart"
                onClick={() => setShowCart(true)}
              />
              {cartList.length !== 0 && <div>{cartList.length}</div>}
            </div>

            {showCart && <Cart cartList={cartList} setShowCart={setShowCart} />}

            <FiLogOut className="icon-header iconLogout" onClick={logout} />
          </div>
        </div>
      </HeaderStyled>
      <MainStyled>
        <ul>
          {productsFilter.map((item, index) => (
            <li key={index}>
              <ShowCaseCard item={item} />
            </li>
          ))}
        </ul>
      </MainStyled>
    </div>
  );
};
