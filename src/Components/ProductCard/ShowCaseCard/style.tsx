import styled from "styled-components";

export const SCCardContainer = styled.div`
  width: fit-content;
  border: 2px solid var(--grey1);
  width: 300px;
  height: 346px;
  border-radius: 5px;
  &:hover {
    border: 2px solid var(--color-primary);
  }
  .imgContainer {
    width: 300px;
    background-color: var(--grey0);
    img {
      max-width: 300px;
      height: 150px;
      margin: 0 auto;
    }
  }
  .textContainer {
    padding: 0 21px;
    h2,
    p {
      margin: 20px 0;
    }
    h2 {
      font-size: 16px;
      color: var(--grey6);
      font-weight: bold;
    }
    p {
      color: var(--grey3);
    }
    .price {
      color: var(--color-primary);
    }
  }
`;
