import { InputContainer, InputStyled } from "./style";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useProduct } from "../../../Providers/Products";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { filterPerCategory } = useProduct();

  return (
    <InputContainer>
      <InputStyled
        placeholder={"Digitar Pesquisa"}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={() => filterPerCategory(search)}>
        <FaSearch />
      </button>
    </InputContainer>
  );
};
