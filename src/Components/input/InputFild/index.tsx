import { InputStyled } from "./Inptut";
import { Label } from "./Label";
import styled from "styled-components";
import { FieldValues, UseFormRegister } from "react-hook-form";

const DivStyled = styled.div`
  position: relative;
  width: 100%;
`;

interface InputFildProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  type: string;
  name: string;
  error: boolean;
  messageerror: string;
}

export const InputFild = ({ register, id, ...ress }: InputFildProps) => {
  return (
    <DivStyled>
      {register && <InputStyled {...ress} {...register(id)} required />}
      <Label htmlFor={id}>
        {!ress.error ? ress.name : `${ress.name} ${ress.messageerror}`}
      </Label>
    </DivStyled>
  );
};
