import { useState } from "react";
import { Redirect } from "react-router";
import { SearchInput } from "../../Components/input/SearchInput";
import { Logo } from "../../Components/LogoCard/Logo";
import { useUser } from "../../Providers/User";
import { HeaderStyled } from "./style";
import { ImCart } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";

export const Home = () => {
  const { auth } = useUser();
  const [search, setSearch] = useState("");
  if (!auth) return <Redirect to="/register" />;
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
            <FiLogOut className="icon-header iconLogout" />
          </div>
        </div>
      </HeaderStyled>
    </div>
  );
};
