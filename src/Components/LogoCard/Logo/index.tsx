import { LogoContainer } from "./style";

export const Logo = ({ ...ress }) => {
  return (
    <LogoContainer {...ress}>
      <h1>
        Burger <span>Kenzie</span>
      </h1>
    </LogoContainer>
  );
};
