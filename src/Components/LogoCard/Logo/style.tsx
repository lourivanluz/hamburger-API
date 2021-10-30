import styled from "styled-components";

interface LogoContainerProps {
  marginBotton?: string;
}

export const LogoContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ marginBotton = "0" }: LogoContainerProps) =>
    marginBotton}px;
  h1 {
    font-size: 30px;
    color: black;
    font-weight: bold;
    span {
      font-size: 20px;
      color: red;
      margin-left: 7px;
    }
  }
`;
