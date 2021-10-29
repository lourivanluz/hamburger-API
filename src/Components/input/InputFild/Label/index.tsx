import styled from "styled-components";

interface LabelProps {
  backgroundColor?: string;
}

export const Label = styled.label`
  display: block;
  cursor: text;
  position: absolute;
  top: 13px;
  left: 8px;
  color: var(--grey5);
  transition: all linear 0.1s;
  background-color: ${({ backgroundColor = "var(--grey0)" }: LabelProps) =>
    backgroundColor}; ;
`;
