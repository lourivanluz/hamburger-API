import { InputHTMLAttributes } from "react";
import { InputContainer, InputStyled } from "./style";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  whidth?: string;
}

export const SearchInput = ({ ...ress }: SearchInputProps) => {
  return (
    <InputContainer>
      <InputStyled {...ress} placeholder={"Digitar Pesquisa"} />
      <button>
        <FaSearch />
      </button>
    </InputContainer>
  );
};
